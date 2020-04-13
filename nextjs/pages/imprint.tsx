import React from "react";
// import Link from "next/link";
import Page from "../components/Page";
import { GetStaticProps } from "next";
import { getData, useGetData, api } from "../utils/api";

const Imprint: React.FunctionComponent = ({}: any) => {
  // useData with locale
  const { data } = useGetData(api.getImprint, {});

  return data ? (
    <Page title="Impressum">
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Page>
  ) : null;
};

export default Imprint;

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     // but it's in english
//     props: { data: await getData("/en/imprint") },
//   };
// };
// export const getStaticProps: GetStaticProps = async () => {
//   return { props: { data: await getData("public_imprint_get") } };
// };
