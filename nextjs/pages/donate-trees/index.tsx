import React from "react";
// import Link from "next/link";
import Page from "../../components/Page";
import PledgeEvents from "../../components/PledgeEvents/PledgeEvents";
import FeaturedProjects from "../../components/Project/FeaturedProjects";
import ProjectsListView from "../../components/Project/ProjectsListView";

const DonateTrees: React.FunctionComponent = ({ data }: any) => {
  const tpos = {}; // data.merge.plantProjectPager[0].entities;

  return (
    <Page title="Donate Trees">
      intro text featured as PlantProjectFull list and search view
      <div>
        <PledgeEvents />
        <FeaturedProjects />
        <ProjectsListView />
      </div>
    </Page>
  );
};

// most complicated
// being reworked

// demo:
// show featured
// list view
// name, price and search
// navigate to a page for each project
// put a donate button any page ->
// add donate-trees/project/id

// current site queries:
// donate trees
//   pledgeEvents
//   featured
//   plantProjects?loadAll=true&limit=10
//   plantProject/ID

// current site components
// DonateTrees
//   SelectPlantProject
//     Heading
//     ModalDialog
//     Slider
//       InnerSlider
//         PrevArrow
//       Track
//         CardLayout
//           PlantProjectFull
//             PlantedProgressBar
//           PlantProjectSpecs
//             PlantProjectSpecsItem
//             PlantProjectSpecsItem
//           NumberFormat
//           SeeMoreToggle
//         PrimaryButton
//       NextArrow
//         CarouselNavigation
//     Tabs

export default DonateTrees;

// export async function getServerSideProps() {
//   // Call an external API endpoint
//   const data = await getData("plantProjects_get");
//   // featured
//   // list
//   // plantProjects_get

//   // Page will receive these props at build time
//   return {
//     props: {
//       data
//       // tpos: data.merge.plantProjectPager.entities
//     }
//   };
// }
