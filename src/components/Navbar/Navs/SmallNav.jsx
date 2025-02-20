import { navigationData } from "../../../data/navigation";
import { Link } from "react-router-dom";

function SmallNav() {
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-1 mt-3 w-52 p-2 shadow"
    >
      {navigationData.map((menuItem, index) => (
        <li key={index}>
          {menuItem.subMenu ? (
            <>
              <a>{menuItem.name}</a>
              <ul className="p-2">
                {menuItem.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subItem.url}>{subItem.name}</a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <a href={menuItem.url}>{menuItem.name}</a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default SmallNav;