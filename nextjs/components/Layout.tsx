import Head from "next/head";
import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";
import LocaleSelectors from "./locale/selectors";
import SideMenu from "./menus/SideMenu";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Trillion Trees",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="columns">
        <aside className="column is-narrow">
          <div>
            <img src="/images/Planet-Logo.png" height="80" width="80" />
          </div>
          <SideMenu />
          <div className="badge-wrapper">
            <LocaleSelectors />
            <div>appstore links</div>
          </div>
        </aside>
        <div className="column">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
