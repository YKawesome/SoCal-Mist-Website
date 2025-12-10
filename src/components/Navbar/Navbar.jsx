import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navigationData } from "../../data/navigation";
import logo from "../../assets/icons/socal-mist-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    
    const handleScroll = () => {
      const currentY = window.scrollY;
      
      // Only update visibility if scroll difference is significant to prevent flickering
      if (Math.abs(currentY - lastY) > 10) {
        if (currentY > lastY && currentY > 100) {
          setIsVisible(false);
          setActiveMenu(null);
        } else {
          setIsVisible(true);
        }
        lastY = currentY;
      }
      
      setScrolled(currentY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -150,
          opacity: 1 
        }}
        transition={{ duration: 0.3 }}
        onMouseLeave={() => setActiveMenu(null)}
        className={`bg-base-100/95 backdrop-blur-md rounded-3xl shadow-lg transition-all duration-300 pointer-events-auto flex flex-col overflow-hidden ${
          scrolled ? "w-full max-w-6xl shadow-xl" : "w-full max-w-5xl"
        }`}
      >
        {/* Main Navbar Row */}
        <div className="navbar px-4 min-h-[4rem]">
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navigationData.map((item, index) => (
                  <li key={index}>
                    {item.subMenu ? (
                      <details>
                        <summary>{item.name}</summary>
                        <ul className="p-2">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              {subItem.url.startsWith("http") ? (
                                <a
                                  href={subItem.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {subItem.name}
                                </a>
                              ) : (
                                <Link to={subItem.url}>{subItem.name}</Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      item.url.startsWith("http") ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link to={item.url}>{item.name}</Link>
                      )
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <Link to="/" className="text-xl btn btn-ghost gap-2 hover:bg-transparent">
              <img src={logo} alt="MIST Logo" className="w-auto h-8" />
              <span className="hidden font-bold sm:inline">SoCal MIST</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal gap-1">
              {navigationData.map((item, index) => (
                <li key={index}>
                  {item.subMenu ? (
                    <button
                      onMouseEnter={() => setActiveMenu(item.name)}
                      className={`btn border-none btn-sm font-medium transition-colors ${
                        activeMenu === item.name ? "btn-primary" : ""
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    item.url.startsWith("http") ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium btn btn-ghost btn-sm"
                        onMouseEnter={() => setActiveMenu(null)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link 
                        to={item.url} 
                        className="font-medium btn btn-ghost btn-sm"
                        onMouseEnter={() => setActiveMenu(null)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <a
              href="https://my.getmistified.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 rounded-full shadow-md btn btn-primary btn-sm hover:scale-105 transition-transform"
            >
              Register
            </a>
          </div>
        </div>

        {/* Expandable Drawer for Submenus */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t bg-base-200/50 border-base-content/5"
            >
              <div className="flex justify-center p-6">
                <div className="flex flex-wrap justify-center max-w-3xl gap-4">
                  {navigationData
                    .find((item) => item.name === activeMenu)
                    ?.subMenu.map((subItem, subIndex) => (
                      <motion.div
                        key={subIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: subIndex * 0.05 }}
                      >
                        {subItem.url.startsWith("http") ? (
                          <a
                            href={subItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-auto px-6 py-3 text-xl font-bold text-center btn btn-ghost hover:bg-base-100 hover:shadow-sm"
                            onClick={() => setActiveMenu(null)}
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link
                            to={subItem.url}
                            className="font-bold btn btn-primary btn-ghost btn-xl"
                            onClick={() => setActiveMenu(null)}
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
