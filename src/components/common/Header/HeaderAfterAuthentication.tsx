import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../../../features/Logout";

type HeaderAfterAuthenticationProps = {
  sidebarStatus: boolean;
};

const HeaderAfterAuthentication: React.FC<HeaderAfterAuthenticationProps> = ({
  sidebarStatus,
}) => {
  const menuitem = [
    { itemLabel: "home", pathTo: "/" },
    { itemLabel: "create plan", pathTo: "/create-plan" },
    { itemLabel: "my plans", pathTo: "/my-plans" },
  ];

  return (
    <nav
      className={`bg-white border-gray-200 dark:bg-gray-900  flex items-center gap-4`}
    >
      {/* menu for mobile */}
      <div
        className={`max-w-screen-xl h-full bg-gray-800 absolute -left-0 top-0 w-72 flex-wrap items-center transition-all duration-300 mx-auto p-4 ${
          sidebarStatus ? "flex left-0" : "hidden"
        }`}
      >
        <MobileNavMenu menuItems={menuitem} />
      </div>

      {/* menu for desktop */}
      <DesktopNavMenu menuItems={menuitem} />

      <Logout />
    </nav>
  );
};

export default HeaderAfterAuthentication;

type TMenu = {
  itemLabel: string;
  pathTo: string;
};
type DesktopNavMenuProps = {
  menuItems: TMenu[];
};

const DesktopNavMenu: React.FC<DesktopNavMenuProps> = memo(({ menuItems }) => {
  return (
    <ul className="font-medium h-full w-full  flex-col md:p-0 rounded-lg hidden md:flex md:flex-row md:space-x-8 rtl:space-x-reverse ">
      {menuItems.map((item) => (
        <li key={item.itemLabel}>
          <NavLink
            to={item.pathTo}
            className={({ isActive }) =>
              `block py-2 px-3 text-gray-200 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray-300/80 capitalize ${
                isActive && "font-bold dark:text-gray-200"
              }`
            }
            aria-current="page"
          >
            {item.itemLabel}
          </NavLink>
        </li>
      ))}
    </ul>
  );
});

const MobileNavMenu: React.FC<DesktopNavMenuProps> = (({ menuItems }) => {
  return (
    <ul
      className={`font-medium h-full w-full  flex-col md:p-0 rounded-lg flex md:flex-row md:space-x-8 rtl:space-x-reverse z-50`}
    >
      {menuItems.map((item) => (
        <li key={item.itemLabel}>
          <NavLink
            to={item.pathTo}
            className={({ isActive }) =>
              `block py-2 px-3 text-gray-200 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray-300/80 capitalize ${
                isActive && "font-bold dark:text-gray-200 bg-blue-600"
              }`
            }
            aria-current="page"
          >
            {item.itemLabel}
          </NavLink>
        </li>
      ))}
    </ul>
  );
});
