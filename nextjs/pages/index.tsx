// import Link from "next/link";
import Page from "../components/Page";
import { useLocale } from "../components/locale/LocaleProvider";
import { api, useGetData } from "../utils/api/useData";
import { TreeCounter } from "../utils/api/client";
// import { getData } from "../utils/api";

const IndexPage = () => {
  const { data } = useGetData<TreeCounter>(api.getMyTreecounter, {});
  console.log(data);

  if (!data) return null;

  const svgData = {
    id: 1,
    target: data.countTarget,
    planted: data.countPlanted,
    community: data.countReceived,
    personal: data.countPersonal,
  };

  return (
    <Page title="Trillion Trees">
      <h1>{data.displayName} 🌳🌲!</h1>
      <div>trillionTreeMessage1</div>
      <div>trillionTreeMessage2</div>
      <div>svgdata tree animation</div>
      <div>pledgeEvents</div>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(svgData, null, 2)}</pre>
      </div>
    </Page>
  );
};

// export async function getStaticProps() {
//   // could get both de and en
// }

// export async function getServerSideProps() {
//   // Call an external API endpoint
//   const data = await getData("treecounter_get");

//   // Page will receive these props at build time
//   return {
//     props: {
//       svgData: {
//         id: 1,
//         target: data.countTarget,
//         planted: data.countPlanted,
//         community: data.countReceived,
//         // this is why it's authenticated request
//         personal: data.countPersonal
//       },
//       // separate this
//       displayName: data.displayName
//     }
//   };
// }

export default IndexPage;
