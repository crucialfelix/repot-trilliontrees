import React from "react";
// import Link from "next/link";
import Page from "../../components/Page";
import Leaderboard from "./Leaderboard";
import ExploreTabs from "../menus/ExploreTabs";

interface Props {
  title?: string;
  section: string;
}

const LeaderboardPage = ({ title = "Explore", section }: Props) => (
  <Page title={title}>
    <ExploreTabs selected="leaderboard" />
    <Leaderboard section={section} />
  </Page>
);

export default LeaderboardPage;
