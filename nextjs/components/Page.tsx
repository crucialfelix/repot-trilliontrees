import * as React from "react";
import Head from "next/head";

type Props = {
  title?: string;
  pageTitle?: string;
  description?: string;
};

/**
 * Wrap each standard page with this.
 * It sets the title.
 *
 * TODO: set other page specific metadata here
 */
const Page: React.FunctionComponent<Props> = ({
  children,
  title = "Trillion Trees",
  pageTitle = "",
  description = "",
}) => (
  <>
    <Head>
      <title>{pageTitle || title}</title>
      {description && <meta name="description" content={description} />}
    </Head>
    <h2 className="title is-3">{title}</h2>
    {children}
  </>
);

export default Page;
