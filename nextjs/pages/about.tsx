import React from "react";
import Link from "next/link";
import Page from "../components/Page";

// no about page on current site
const AboutPage: React.FunctionComponent = () => (
  <Page title="About the Trillion Trees Campaign">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Page>
);

export default AboutPage;
