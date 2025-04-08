import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NAV_MENU_BOTTOM = [
  { path: "/", key: "nav.home", icon: "Home" },
  { path: "/store", key: "nav.store", icon: "Store" },
  { path: "/upload", key: "nav.upload", icon: "Upload" },
  { path: "/mail", key: "nav.mail", icon: "Mail" },
  { path: "/profile", key: "nav.profile", icon: "User" },
];

const NavMenuBottom = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="absolute right-0 bottom-0 left-0 z-10 flex h-16 items-center justify-between bg-white px-4 shadow-md">
        {NAV_MENU_BOTTOM.map(({ path, key }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-black" : "text-gray-400"
              }`
            }
          >
            {t(key)}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default NavMenuBottom;
