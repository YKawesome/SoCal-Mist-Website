import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import images from "../../utils/preloadimages";
import "./Navbar.css";
import LargeNav from "./Navs/LargeNav";
import SmallNav from "./Navs/SmallNav";

function Navbar() {
  const instaLogo = images["instagram.svg"];
  const mistLogo = images["socal-mist-logo.png"];
  const tiktokLogo = images["tiktok.svg"];

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
      <div className="navbar bg-neutral text-neutral-content shadow-sm h-20 z-20">
        <div className="navbar-start">
          <Link to="/" className="px-3">
            <div className="w-18">
              <img src={mistLogo} alt="SoCal MIST Logo" />
            </div>
          </Link>
          {/* <Link className="btn btn-ghost text-xl" to="/">SoCal MIST</Link> */}
          <div className="hidden lg:flex">
            <LargeNav />
          </div>
        </div>

        <div className="navbar-end">
          <div className="gap-2 hidden lg:flex text-neutral-content invert">
            <a className="btn btn-ghost btn-square">
              <img className="w-8" src={instaLogo} alt="Instagram Logo" />
            </a>
            <a className="btn btn-ghost btn-square">
              <img className="w-8" src={tiktokLogo} alt="TikTok Logo" />
            </a>

          </div>
          <div className="dropdown dropdown-end">
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
            <SmallNav />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
