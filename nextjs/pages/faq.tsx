import React from "react";
// import Link from "next/link";
import Page from "../components/Page";
import { getData } from "../utils/api";
import { GetStaticProps } from "next";

const FAQ: React.FunctionComponent = ({ data }: any) => {
  return (
    <Page title="Trillion Trees FAQ">
      <h1>FAQ</h1>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { data: await getData("public_faqs_get") } };
};

export default FAQ;
