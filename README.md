# Repot Trillion Trees

The [Plant for the Planet](https://plant-for-the-planet.org) / [Trillion Trees](https://www.trilliontreecampaign.org/) team have been discussing how to rebuild the [current app](https://github.com/plant-for-the-Planet-org/treecounter-app/) with a new architecture. Development has been tricky and slow due to the app complexity, and with newer methodologies I'm sure things can move faster and result in more robust, satisfying code.

**This repository is a quick sketch using some new tech in order to try some things out and discover what works and what might be annoying and how to solve it.**

It isn't meant to be clean, it is meant to find and solve problems quickly. It's an experiment.

Current application:
https://github.com/plant-for-the-Planet-org/treecounter-app/

I worked a bit on the app in 2019, so I have a pretty good understanding how things are currently done and what all the essential features are.

The primary pain points are:

1. `redux` has a high cognitive load and makes changes and debugging tedious.
  - It was standard practice at the time the app was built, but most everybody has moved on to use hooks and `useReducer` where needed.
  - It is used for:
      - navigation
      - data fetching
      - global state
      - local state (component or page level)
2. Pages are built with Containers (that do data fetching) and components. All data must be passed down from the top level Container. This makes changes and debugging tedious and error prone.
3. Components are large, class based, with many methods and much state juggling. React hooks make everything much easier now.

## Next.js

This is most popular React based framework, and with good reason. It is batteries included, but easily customizable. Simple to start with and doesn't limit you as you scale up.

- Each release brings significant performance and innovative features
- Optimized builds
- Automatic code splitting
- Fully customizable, but uses best practices by default
- Development and production by default require no fancy tooling. It just works. Really.

Next.js can run in several different ways:
1. Single Page App (SPA)
  - A React app that runs in the browser. It can connect to any backend (REST, GraphQL). This is built, exported and then uploaded to a CDN.
2. A Node.js Server - (SSR: Server-Side Rendering)
  - In this mode are isomorphic: the server generates a full HTML response, the client then loads that and it becomes an SPA as they navigate to other pages or interact with the app.
  - In this situation it would replace the Symfony server for HTML responses, but you would keep connecting to Symfony for the REST API.
  - This means you don't have to keep the Symfony and frontend routes in sync. The next.js node server handles all requests. You add new pages in minutes.
3. Export static site - (SSG: Static Site Generator)
  - In this mode all pages are generated as HTML and published to Cloudflare. This is great for SEO and speed of first page load. When the client loads a page, it becomes an SPA and they navigate / interact just as from the server.  For this you would build the site a few times a day in case of any new Plant Projects or for to update the stats for the static pages. Subsequent navigation to new pages (and searches) use the REST API so they get fresh data.
  - In this mode there isn't a server at all, except for the Symfony REST API.
  - It is also possible to combine static site and server so just certain requests go to a server. Or even a serverless Cloudflare lambda function. (Keep it simple, don't try this yet)

In *Next.js* route and pages are just files. URLs map directly to these files. URL parameters are respresented like `[country].tsx`

```
pages ❯
.
├── _app.tsx
├── _document.tsx
├── about.tsx
├── authorize.tsx
├── challenge.tsx
├── data-protection.tsx
├── donate-trees
│   └── index.tsx
├── explore.tsx
├── faq.tsx
├── gift-trees.tsx
├── imprint.tsx
├── index.tsx
├── leaderboard
│   ├── company
│   │   └── index.tsx
│   ├── country
│   │   ├── [country].tsx
│   │   └── index.tsx
│   ├── education
│   │   └── index.tsx
│   ├── index.tsx
│   ├── individual
│   │   └── index.tsx
│   └── organization
│       └── index.tsx
├── login.tsx
├── redeem.tsx
├── register-trees.tsx
├── signup.tsx
├── target.tsx
└── users
    ├── [id].tsx
    └── index.tsx
```

No more confusing redux for navigation, no router.

You always know where to look in the source code to edit a page. I always get lost looking up the route names (which are different than the component names and the URLs)

Links to other pages are just links.

## TypeScript

Reduces or even eliminates runtime crashes (when used in strict mode)

VSCode has fabulous tooling so everything just works. All IDEs and editors support TypeScript.

Sometimes you will run into complications and have to learn some typing voodoo. Solve these problems and your app will run solid. It takes less time than all the time your normally waste wondering if something is defined or not , fixing mispelings (sic) or debugging runtime crashes due to undefined properties.

With `OpenAPI` (see below) the entire data client can be generated with all TypeScript interfaces:
eg. [PlantProject](./nextjs/utils/api/client/models/PlantProject.ts)

## Data API

I would have recommended GraphQL, but this increases complexity. The goal here is to reduce it. I recommend staying with the current REST API for now.

OpenAPI aka Swagger

I wrote an OpenAPI file that documents and describes the API:

[trillion-trees.yaml](./nextjs/utils/api/trillion-trees.yaml)

It's not finished yet.

You can derive this from the `PHP` `Symfony` source using annotated `@swagger` comments in the `PHP` source and using some tool.

Currently there is a different inline API documentation system in `treecounter-platform` that.
I didn't yet figure out what that is or if it's possible to use it as is to generate an OpenAPI file.
See https://github.com/plant-for-the-Planet-org/treecounter-platform

Using the OpenAPI file, an API client is generated:

`openapi-generator generate -g typescript-fetch -i ./trillion-trees.yaml -o ./client/ -c ./openapi-generator-config.yml`

[Generated Client DefaultApi](./nextjs/utils/api/client/apis/DefaultApi.ts)

This also includes TypeScript interfaces for all API requests and responses, and for all models.

Models:
```
├── Contribution.ts
├── Gift.ts
├── InlineResponse200.ts
├── InlineResponse2001.ts
├── LeaderboardBreadcrumb.ts
├── LeaderboardEntry.ts
├── Menu.ts
├── MenuItem.ts
├── MenuSection.ts
├── PlantProject.ts
├── PlantProjectAllOf.ts
├── PlantProjectAllOfTpoData.ts
├── PlantProjectAllOfTpoDataAddress.ts
├── PlantProjectAllOfTreeCountOptions.ts
├── PlantProjectImage.ts
├── PlantProjectPager.ts
├── PlantProjectPagerMerge.ts
├── PlantProjectPagerMergePlantProjectPager.ts
├── PlantProjectSummary.ts
├── PledgeEvent.ts
├── PledgeEvents.ts
├── TreeCounter.ts
├── UserProfile.ts
```

React components that display models (PlantProject, PledgeEvent etc) can accept this as inputs. This makes coding views really easy and error free.

I tried three different ways to fetch data:

1. Fetch with the generated client:

```ts
const data = await api.getLeaderboard({section: "country"})
```

2. Fetching data with a React hook:

```ts
import { api, useGetData } from "../../utils/api/useData";

const SideMenu = () => {
  const { data }: any = useGetData<MenuSection[]>(api.getMenu, {});
  const router = useRouter();

  if (!data) return null;

  return (
    <>
      {data.map((item: MenuSection, i: number) => (
        <MenuSectionBlock
          section={item}
          key={`ms-${i}`}
          current={router.pathname}
        />
      ))}
    </>
  );
};
```

This is the best way when you are writing views or pages. `data` is null while it is loading, then it is set (and the component re-renders). I wrote `useGetData` (link to source). It uses SWR to cache responses (see below).
It uses the locale (EN DE) so that when you switch the language it re-fetches using the new locale and re-renders the component.

The `api` you import is fully typed, so autocomplete and helpful-scolding happen while you code. You know that your params and the response data type are correct.

3. Fetching using the current app's system of route names referenced in `fos_js_routes.json` that is exported from Symfony. This includes a Router package which is a JavaScript port of the Symfony router.

```ts
const faq = await getFOSRoute("public_faqs_get")
```

This is fine, but it doesn't have the types, and the route names are not the same as the URLs and I always found it confusing to figure out what route name to use.

This would allow you to avoid writing the whole OpenAPI spec, but I think you would want to do that anyway for public use.

You could start by using 3 (just like I did), and easily switch over to the generated client if and when you feel comfortable.

4. Get data from any REST endpoint.

Assemble your own URL with params. Does not use `fos_js_routes.json`

```ts
const copy = await getData("/en/privacy");
```

Nice and simple

## SWR

Cache api requests with SWR https://swr.now.sh/

This is a great package. Regardless if you end up using next or not, definitely `useSWR`

Very intelligent caching.
You can have it auto fresh every few minutes.
Refreshes only if component is visible (not scrolled down)

You could even adopt this now in the current app. It would solve all the cache problems.

## __Next.js__ Data Fetching

__Next.js__ has a few nice tricks for data fetching on a page:

https://nextjs.org/docs/basic-features/data-fetching

`getStaticProps`

This will pre-render the page at build time. This means that when you build the app, it can call an API, database or read a local file system, and then it bakes those props into the page.  At runtime there is no need to fetch the data.

This can be used on all the static pages like imprint, privacy, faq. There is no need to hit the database all the time for these.

Caveats:
- Only works for anonymous, non-authenticated views
- Changes to these pages are only updated when you do a new release.
- You really need to know which locale to call. See below. I think locale should be in the URL

`getStaticPaths` - for static site generation. This returns an array of paths for all the versions of a page that you want to generate. So you would return an array with all URLs for all the Plant Projects `["/t/{slug}}, ...]` and when building the static site you get html pages for every Plant Project.

`getServerSideProps` - for when running a server. Returns props for the page as generated on the server. This is really interesting and a bit cheeky. This means in one file you have code for the client that displays the page and for the backend server that supplies it with props. You can query a database or local file system directly.

## Locale and Currency

This demo includes a `LocaleProvider` at the top level of the app that provides locale and currency to all functional components via a `useLocale` hook.

```ts
const { locale, setLocale, currency, setCurrency } = useLocale();
```

The locale and currency switcher is just like the current app. When you switch languages, the page you are looking at will refetch data in the new language.

This demo does not use yet `i18n`, but this is easy to add in.

Then you can do:

```tsx
const { i18n } = useLocale();
return <span>{i18n.t('label.imprint')}</span>`
```

and if the user changes locale, the translated text will switch too.

The demo does not persist the locale to `localStorage`

I think the locale would be better stored in the URL as a path parameter:

- `https://www.trilliontreecampaign.org/en/explore`
- `https://www.trilliontreecampaign.org/de/explore`

Then all pages could be statically generated and published for all languages for SEO and near instant first page load. `getStaticProps`

The react-native app would need to work slightly differently.

## Auth0

This demo includes `Auth0Provider` and `useAuth`

These come from the Auth0 branch I was working on:

https://github.com/Plant-for-the-Planet-org/treecounter-app/tree/feature/react-auth0

But now there is a next.js auth0 package and example repo that makes it even simpler:

https://github.com/auth0/nextjs-auth0

This would require running the Next.js node server instead of Symfony, as Auth0 needs to redirect back to URLS on the domain.

REST API calls to Symfony would need to add the JWT token into requests

The Symfony server still needs to be able to accept these rather than or as well as the current JWT.

https://github.com/Plant-for-the-Planet-org/treecounter-app/issues?q=is%3Aissue+is%3Aopen+auth
https://github.com/Plant-for-the-Planet-org/treecounter-platform/issues/292

I would advise not keeping the current React auth management code. This rolls it's own storage, authentication and refresh tokens. It is better to use an open source library with many eyeballs on the code looking for security issues and bugs.

## Reducers

Most of the reducers would not be needed anymore. Few of them used for actual global app state.

For pages with multi-stage forms like paymentStatus, a small localized reducer can be made on that page using `useReducer`

Localized state on a page or component should be managed with `useState`

## Styling

[Next.js supports](https://nextjs.org/docs/basic-features/built-in-css-support) out of the box:
- global stylesheets
- CSS modules
    - Keep React component and it's styling in the same folder.
    - Reduces file sizes as you only send the styling if and when it's actually used.
- CSS-in-JS

### CSS frameworks

- The demo uses [Bulma CSS](https://bulma.io/).
    - You only import the components you need.
    - Themable and fully customizable
    - Well liked by picky developers
- [Tailwind](https://tailwindcss.com/) is also a good choice
    - Some people don't like having all those css classes in their code.

Any CSS framework can be used just for layouts, menus, standard UI components etc. and then you write custom styling for the components that are central to this app.

## react-native

### Separate React web and React native projects

Share components where possible, but keep the two build targets in separate folders in the repository, each with their own `package.json`

They have substantially different requirements for installing.

It looks like the MAJORITY of components have separate `Component.js` and `Component.native.js`

Possible directory structure:
- `.`
    - `next` - the new website
        - `package.json` - separate packages
        - `node_modules`
        - `pages`
        - `components`
        - `utils`
        - ...
    - `mobile` -  for the react-native project
        - `package.json`
        - `node_modules`
- `.gitignore` etc.

__I did not yet get to try this dual folder structure.__

Things you want to share:
- formSchemas
- LocaleProvider
- assets
- JSON data files
- locales (translations)

The question is: can you share things like LocaleProvider or display components when the folders are side by side? I've seen some people recommend having one project inside the other:

`.`
    - `package.json`  for react-native
    - `node_modules` for react-native
    - `next`  a child folder
      - `package.json` for web app
      - `node_modules`
      - `shared`  for things that the react-native app can reach down into this folder to import

This is a bit odd.

### Consider using Expo and build for web.

This is for projects (like this one) that use web and react-native. Expo is awesome, but there are some downsides to be wary of.

__This may sound like less work but end up being more complications and more work!__

https://docs.expo.io/versions/v37.0.0/distribution/publishing-websites/
https://dev.to/evanbacon/next-js-expo-and-react-native-for-web-3kd9
https://necolas.github.io/react-native-web/docs/?path=/docs/guides-multi-platform--page

## Deployment

`npm run build`

Granted, the app is pretty bare right now, but still the pages are realy small and optimized:

```
Page                                                           Size     First Load JS
┌ ○ /                                                          636 B          89.9 kB
├   /_app                                                      4.13 kB        89.3 kB
├ ○ /404                                                       3.15 kB        92.4 kB
├ ○ /about                                                     3.77 kB        93.1 kB
├ ○ /authorize                                                 315 B          89.6 kB
├ ○ /challenge                                                 2.52 kB        91.8 kB
├ ● /data-protection                                           2.58 kB        91.9 kB
├ ○ /donate-trees                                              741 B            90 kB
├ ○ /explore                                                   4.08 kB        93.4 kB
├ ● /faq                                                       2.59 kB        91.9 kB
├ ○ /gift-trees                                                2.52 kB        91.8 kB
├ ○ /imprint                                                   579 B          89.9 kB
├ ○ /leaderboard                                               2.61 kB        91.9 kB
├ ○ /leaderboard/company                                       2.6 kB         91.9 kB
├ ○ /leaderboard/country                                       2.59 kB        91.9 kB
├ ○ /leaderboard/country/[country]                             2.61 kB        91.9 kB
├ ○ /leaderboard/education                                     2.6 kB         91.9 kB
├ ○ /leaderboard/individual                                    2.6 kB         91.9 kB
├ ○ /leaderboard/organization                                  2.6 kB         91.9 kB
├ ○ /login                                                     2.58 kB        91.9 kB
├ ○ /redeem                                                    2.53 kB        91.8 kB
├ ○ /register-trees                                            2.53 kB        91.8 kB
├ ○ /signup                                                    2.54 kB        91.8 kB
└ ○ /target                                                    2.53 kB        91.8 kB
+ First Load JS shared by all                                  89.3 kB
  ├ static/pages/_app.js                                       4.13 kB
  ├ chunks/02fdd446b9d24b530653f3e5f8fffa54c17d2749.a3bfbe.js  2.4 kB
  ├ chunks/2bc6131d12d9941c8d6e88c497f441bc122b01af.ae31bf.js  7.8 kB
  ├ chunks/e890d61de8015b8d23b3fe7472d4ceca49eaa6f0.d3ed1f.js  11.3 kB
  ├ chunks/fc776bd488859104121a5e360ac54a36ab89a8b0.f1729d.js  16.5 kB
  ├ chunks/framework.0f140d.js                                 40 kB
  ├ runtime/main.e63b67.js                                     6.45 kB
  └ runtime/webpack.b65cab.js                                  746 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
```

## Further Steps

If I had the time, I would:
- finish the Leaderboard navigation
- Fetch the plant projects and do the list view on donate-trees
- Set up a form using tcomb and the form schemas from the current app
- Write `usePostAPI` to post to the API
- Try the next.js Auth0 example
- Set up react-native side by side with `nextjs` and figure out how to share assets, components, providers and app logic.

I hope this was in some way helpful. Please fork it and mess around, find problems and test solutions before you build a whole new application.

Feel free to ask me anything here or on Slack:
crucialfelix@gmail.com
