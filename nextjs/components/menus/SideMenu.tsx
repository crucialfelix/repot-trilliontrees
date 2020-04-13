import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import { MenuItem, MenuSection } from "../../utils/api/client";
import { api, useGetData } from "../../utils/api/useData";

const SideMenu: React.FunctionComponent = () => {
  const { data, error }: any = useGetData<MenuSection[]>(api.getMenu, {});
  const router = useRouter();

  if (error) return null;
  if (!data) return null;

  return (
    <>
      {data.map((item: MenuSection, i: number) => (
        <MenuSectionBlock
          section={item}
          key={`ms-${i}`}
          current={router.pathname}
        />
      ))}
    </>
  );
};

const MenuSectionBlock = ({
  section,
  current,
}: {
  section: MenuSection;
  current: string;
}) => {
  return (
    <div key={"div" + section.sequence}>
      <span className="menu-label">
        &nbsp;&nbsp;{section.caption}
        {/* {section.uri ? (
          <Link href={section.uri}>{section.caption}</Link>
        ) : (
          section.caption
        )} */}
      </span>
      <ul className="menu-list">
        {section.menuItems?.map((it) => (
          <LiMenuItem
            menuItem={it}
            current={current}
            key={`menuItem-${it.sequence}`}
          />
        ))}
      </ul>
    </div>
  );
};

const LiMenuItem = ({
  menuItem,
  current,
}: {
  menuItem: MenuItem;
  current: string;
}) => {
  const path = null;
  const uri = menuItem.uri;
  // const selected = false;
  const hasIcon = menuItem.icon && menuItem.icon !== "none";

  const selected = menuItem.uri === current;

  // This is for showing which section is selected. /explore is the same section as /leaderboard
  // const selected = menuItem.uri.substr(menuItem.uri.lastIndexOf("/") + 1) === path ||
  // (pathname.indexOf("leaderboard") + 1 &&
  //   menuItem.uri.substr(menuItem.uri.lastIndexOf("/") + 1) === "explore");

  // className={selected ? "menu_item_selected" : "menu_item_unselected"}
  return menuItem.enabled ? (
    <li>
      <img
        // src={hasIcon ? images[menuItem.icon + (selected ? "_red" : "")] : null}
        className="menu-icon"
      />
      <Link href={menuItem.uri || "#"}>
        <a className={cx({ "is-active": selected })} href={menuItem.uri}>
          {menuItem.caption}
        </a>
      </Link>
    </li>
  ) : (
    <li>
      <i className="material-icons">{"folder_open"}</i>
      <a>{menuItem.caption}</a>
    </li>
  );
};

export default SideMenu;
