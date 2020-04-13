import React from "react";
import Page from "../components/Page";
import ExploreTabs from "../components/menus/ExploreTabs";

const Explore = () => (
  <Page title="Explore Tree Planting Projects around the world">
    <p>Auf der Welt...</p>
    <ExploreTabs selected="explore" />
    <div>map</div>
  </Page>
);

// leaderboard
// heading
// card layout
//   tabs
//     maptab
//       map layer selector
//       arcgis explore map
//         maplayer view
//           webmap
//             webbase
//               arcview
//                 arccontainer

export default Explore;
