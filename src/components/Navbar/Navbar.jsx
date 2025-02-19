import React, { useEffect } from "react";
import "./Navbar.css";
import instaLogo from "../../assets/icons/instagram.svg";
import tiktokLogo from "../../assets/icons/tiktok.svg";
import mistLogo from "../../assets/icons/socal-mist-logo.png";

function Navbar() {
  useEffect(() => {
    // Get all <details> elements
    const detailsElements = document.querySelectorAll("details");

    // When one dropdown is toggled open, close all others
    const handleToggle = (e) => {
      if (e.target.open) {
        detailsElements.forEach((detail) => {
          if (detail !== e.target) {
            detail.removeAttribute("open");
          }
        });
      }
    };

    detailsElements.forEach((detail) => {
      detail.addEventListener("toggle", handleToggle);
    });

    // Close dropdowns if clicking outside of any open dropdown
    const handleDocumentClick = (event) => {
      detailsElements.forEach((detail) => {
        if (detail.open) {
          detail.removeAttribute("open");
        }
      });
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      detailsElements.forEach((detail) => {
        detail.removeEventListener("toggle", handleToggle);
      });
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm h-20 z-20">
        <div className="navbar-start">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div className="w-18">
              <img src={mistLogo} alt="SoCal MIST Logo" />
            </div>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">SoCal MIST</a>
          <div className="hidden lg:flex">
            <ul className="menu menu-lg menu-horizontal px-1">
              <li>
                <details>
                  <summary>About</summary>
                  <ul className="p-2 w-max">
                    <li>
                      <a>About MIST</a>
                    </li>
                    <li>
                      <a>Meet the Board</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>SoCal MIST 2025</summary>
                  <ul className="p-2 w-max">
                    <li>
                      <a>Registration</a>
                    </li>
                    <li>
                      <a>Theme</a>
                    </li>
                    <li>
                      <a>Rulebook</a>
                    </li>
                    <li>
                      <a>Competitions</a>
                    </li>
                    <li>
                      <a>Programs</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Get Involved</summary>
                  <ul className="p-2 w-max">
                    <li>
                      <a>Judge</a>
                    </li>
                    <li>
                      <a>Volunteer</a>
                    </li>
                    <li>
                      <a>E-Board Application</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Past Years</summary>
                  <ul className="p-2 w-max">
                    <li>
                      <a>2023</a>
                    </li>
                    <li>
                      <a>2024</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Donate</summary>
                  <ul className="p-2 w-max">
                    <li>
                      <a>Donate</a>
                    </li>
                    <li>
                      <a>Sponsor</a>
                    </li>
                    <li>
                      <a>E-Board Application</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end gap-2">
          <a className="btn btn-ghost btn-square">
            <img className="w-8" src={instaLogo} alt="Instagram Logo" />
          </a>
          <a className="btn btn-ghost btn-square">
            <img className="w-8" src={tiktokLogo} alt="TikTok Logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
