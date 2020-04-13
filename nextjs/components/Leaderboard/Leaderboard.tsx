import React from "react";
import { api, useGetData } from "../../utils/api/useData";
import Link from "next/link";
import { LeaderboardEntry } from "../../utils/api";
import LeaderboardListView from "./LeaderboardListView";

interface Props {
  section: string;
  subSection?: string;
}

const sections = [
  "country",
  "organization",
  "education",
  "company",
  "individual",
];

interface LeaderboardResponse {
  data: LeaderboardEntry[];
}

const Leaderboard = ({ section, subSection }: Props) => {
  const { data, error } = useGetData<LeaderboardResponse>(api.getLeaderboard, {
    section,
  });
  if (error) {
    console.error(error);
  }
  return (
    <>
      <SectionNav section={section} />
      <div>sort and pagination controls</div>
      {data ? <LeaderboardListView data={data} /> : <div>Loading...</div>}
    </>
  );
};

const SectionNav = ({ section }: { section: string }) => {
  // TODO highlight currently selected
  return (
    <ul className="flex">
      {sections.map((s) => (
        <li className="mr-6" key={s}>
          <Link href={`/leaderboard/${s}`}>
            <a
              href={`/leaderboard/${s}`}
              className="text-blue-500 hover:text-blue-800"
            >
              {s}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Leaderboard;
