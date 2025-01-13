import React, { memo, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import Logo from "../../UI/Logo";
import HeaderAfterAuthentication from "./HeaderAfterAuthentication";
import HeaderBeforeAuthentication from "./HeaderBeforeAuthentication";

const Header = () => {
  const { user, loadingAuth } = useAuthContext();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header className="w-full bg-gray-900 py-4 px-2 md:px-6 flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-2">
        {!loadingAuth && user !== null ? (
          <HeaderAfterAuthentication sidebarStatus={menuOpen} />
        ) : (
          <HeaderBeforeAuthentication />
        )}

        <SidebarToggler sidebarToggler={setMenuOpen} />
      </div>
    </header>
  );
};

export default Header;

type SidebarTogglerProps = {
  sidebarToggler: React.Dispatch<React.SetStateAction<boolean>>;
};
const SidebarToggler: React.FC<SidebarTogglerProps> = memo(
  ({ sidebarToggler }) => {
    return (
      <button
        type="button"
        onClick={() => sidebarToggler((prev) => !prev)}
        className="inline-flex items-center p-2 size-10 justify-center text-sm text-gray-500 rounded md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    );
  }
);
