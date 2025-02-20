import { navigationData } from "../../../data/navigation";
import { Link } from "react-router-dom";

function LargeNav() {
  return (
    <ul className="menu menu-lg menu-horizontal px-1">
      {navigationData.map((menuItem, index) => (
        <li key={index}>
          <details>
            <summary>{menuItem.name}</summary>
            <ul className="p-2 w-max bg-neutral text-neutral-content">
              {menuItem.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link to={subItem.url}>{subItem.name}</Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ))}
    </ul>
  );
}

export default LargeNav;
