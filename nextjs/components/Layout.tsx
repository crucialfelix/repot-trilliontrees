import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </Head>
    <header>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          <Link href="/login">
            <a>Login</a>
          </Link>{" "}
          <Link href="/signup">
            <a>Register</a>
          </Link>{" "}
        </div>
      </nav>
    </header>
    <main>
      <div className="relative min-h-screen pt-16 pb-32">{children}</div>
    </main>
    <footer className="relative pt-8 pb-6">
      <hr />

      <span>Footer</span>
    </footer>
  </div>
);

export default Layout;
