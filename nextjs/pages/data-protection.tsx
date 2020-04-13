import React from "react";
// import Link from "next/link";
import Page from "../components/Page";
import { GetStaticProps } from "next";
// import { api, GetPrivacyLocaleEnum } from "../utils/api";
import { getData } from "../utils/api";

const DataProtection: React.FunctionComponent = ({ data }: any) => (
  <Page title="Data Protection">
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  </Page>
);

export default DataProtection;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { data: await getData("/en/privacy") },
  };
};

// Does not yet work on server due to undefined global FormData in generated api/client/runtime.ts
// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: { data: await api.getPrivacy({ locale: GetPrivacyLocaleEnum.En }) },
//   };
// };
