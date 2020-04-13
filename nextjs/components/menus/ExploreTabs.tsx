import React from "react";
import cx from "classnames";
import Link from "next/link";

const tabs = [
  { text: "Map", url: "/explore" },
  { text: "Leaderboard", url: "/leaderboard/country" },
];

const ExploreTabs = ({ selected }: { selected: string }) => {
  return (
    <div className="tabs">
      <ul>
        {tabs.map((t) => (
          <li
            key={t.text}
            className={cx({ "is-active": t.url.indexOf(selected) !== -1 })}
          >
            <Link href={t.url}>
              <a href={t.url}>{t.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExploreTabs;
