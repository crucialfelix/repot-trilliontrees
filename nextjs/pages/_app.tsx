import "isomorphic-fetch";

import App from "next/app";
import React from "react";

import { Auth0Provider } from "../components/auth/Auth0Provider";
import Layout from "../components/Layout";
import { LocaleProvider } from "../components/locale/LocaleProvider";
// import { ApiProvider } from "../utils/api/APIProvider";

// import { AuthProvider } from "../components/shared/auth/AuthProvider";
// import { UserProvider } from "../components/shared/auth/UserProvider";
// const FormData = ((global as unknown) as { FormData: unknown }).FormData;
// if (!FormData) {
//   ((global as unknown) as { FormData: unknown }).FormData = class FormData {};
// }

// staging
const context = {
  auth0domain: "planetapp.eu.auth0.com",
  auth0clientId: "f87fcw2Tt0A9TAinILwtfSiD4QnQilph",
};

const onRedirectCallback = (appState: any) => {
  console.log("onRedirectCallback", appState);

  // move this inside of Auth0Provider
  // https://nextjs.org/docs/api-reference/next/router
  // const aa = appState || {};
  // // get this from next
  // const next = aa.targetUrl || window.location.pathname;
  // // Need to wait a second until the app has processed and set logged in state
  // const current = window.location.pathname;
  // setTimeout(() => {
  //   if (current !== next) {
  //     // history.push(next);
  //   }
  // }, 500);
};

class TrillionTrees extends App {
  // componentDidMount() {
  //   initGA(process.env.UA);
  // }

  render() {
    const { Component, pageProps } = this.props;
    const inner = <Component {...pageProps} />;

    return (
      <Auth0Provider
        domain={context.auth0domain}
        client_id={context.auth0clientId}
        redirect_uri={`/auth0-callback`}
        onRedirectCallback={onRedirectCallback}
      >
        <LocaleProvider>
          {/* <ApiProvider> */}
          <Layout>{inner}</Layout>
          {/* </ApiProvider> */}
        </LocaleProvider>
      </Auth0Provider>
    );

    // return (
    //   <ApolloProvider client={apolloClient}>
    //     <UserProvider>{inner}</UserProvider>
    //   </ApolloProvider>
    // );
  }
}

export default TrillionTrees;
