import { navigationData } from "../../../data/navigation";
import { Link } from "react-router-dom";

function SmallNav() {
  const closeDrawer = () => {
    const checkbox = document.getElementById("mobile-nav-drawer");
    if (checkbox && "checked" in checkbox) {
      checkbox.checked = false;
    }
  };

  return (
    <ul className="menu bg-neutral text-neutral-content min-h-full w-80 p-4">
      {navigationData.map((menuItem, index) => (
        <li key={index}>
          {menuItem.subMenu ? (
            <>
              <span className="menu-title text-neutral-content opacity-70">{menuItem.name}</span>
              <ul className="p-0 pl-2">
                {menuItem.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="">
                    <Link to={subItem.url} onClick={closeDrawer}>
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <a href={menuItem.url} onClick={closeDrawer}>
              {menuItem.name}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default SmallNav;
