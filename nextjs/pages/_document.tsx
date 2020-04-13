/**
https://nextjs.org/docs/advanced-features/custom-document

To augment html and body tags

A custom Document can also include getInitialProps for expressing asynchronous server-rendering data requirements.

probably need this for locale

**/
import Document, { Head, Main, NextScript } from "next/document";

import React from "react";

// import GoogleFonts from "../components/shared/GoogleFonts";
// import { googleFonts } from "../config";

export default class TrillionTreesDocument extends Document {
  // static getInitialProps({ renderPage }) {
  //   // Step 1: Create an instance of ServerStyleSheet
  //   const sheet = new ServerStyleSheet();

  //   // Step 2: Retrieve styles from components in the page
  //   const page = renderPage(App => props =>
  //     sheet.collectStyles(<App {...props} />)
  //   );

  //   // Step 3: Extract the styles as <style> tags
  //   const styleTags = sheet.getStyleElement();

  //   // Step 4: Pass styleTags as a prop
  //   return { ...page, styleTags };
  // }

  // constructor(props) {
  //   super(props);
  //   const { __NEXT_DATA__, ids } = props;
  //   if (ids) {
  //     __NEXT_DATA__.ids = ids;
  //   }
  // }

  render() {
    return (
      <html>
        <Head>
          {/* {this.props.styleTags} */}
          {/* <GoogleFonts fonts={googleFonts} /> */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <meta
            name="google-site-verification"
            content={process.env.googleSiteVerification}
          /> */}
          {/* <link
            href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
            rel="stylesheet"
          /> */}
          <link
            href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
