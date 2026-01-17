import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navigationData } from "../../data/navigation";
import logo from "../../assets/icons/socal-mist-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null);
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
          setMobileMenuOpen(false);
          setActiveMobileSubMenu(null);
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

  // Reset mobile submenu state when menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setActiveMobileSubMenu(null);
    }
  }, [mobileMenuOpen]);

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
          scrolled || mobileMenuOpen ? "w-full max-w-6xl shadow-xl" : "w-full max-w-5xl"
        }`}
      >
        {/* Main Navbar Row */}
        <div className="navbar px-4 min-h-[4rem]">
          <div className="navbar-start">
            {/* Mobile Toggle */}
            <button 
              className="btn btn-ghost lg:hidden"
              onClick={() => {
                if (mobileMenuOpen) setActiveMobileSubMenu(null);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            
            <Link to="/" className="text-xl gap-2 btn btn-ghost hover:bg-transparent" onClick={() => setMobileMenuOpen(false)}>
              <img src={logo} alt="MIST Logo" className="w-auto h-8" />
              <span className="hidden font-bold sm:inline">SoCal MIST</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 gap-1 menu menu-horizontal">
              {navigationData.map((item, index) => (
                <li key={index}>
                  {item.subMenu ? (
                    <button
                      onMouseEnter={() => setActiveMenu(item.name)}
                      className={`btn border-none bg-base-100/0 hover:bg-primary btn-md transition-colors ${
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
              className="px-6 rounded-full shadow-md transition-transform btn btn-primary btn-md hover:scale-105"
            >
              Register
            </a>
          </div>
        </div>

        {/* Mobile Menu Expansion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-t lg:hidden border-base-200 bg-base-100"
            >
              <ul className="w-full p-4 gap-2">
                {navigationData.map((item, index) => (
                  <li key={index}>
                    {item.subMenu ? (
                      <div className="flex flex-col">
                        <button 
                          className="flex items-center justify-between w-full py-2 text-lg font-bold text-left"
                          onClick={() => setActiveMobileSubMenu(activeMobileSubMenu === index ? null : index)}
                        >
                          {item.name}
                          <motion.svg 
                            animate={{ rotate: activeMobileSubMenu === index ? 180 : 0 }}
                            className="w-4 h-4" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                        <AnimatePresence>
                          {activeMobileSubMenu === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <ul className="pl-4 mt-2 border-l menu border-base-300">
                                {item.subMenu.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    {subItem.url.startsWith("http") ? (
                                      <a href={subItem.url} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                        {subItem.name}
                                      </a>
                                    ) : (
                                      <Link to={subItem.url} onClick={() => setMobileMenuOpen(false)}>
                                        {subItem.name}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      item.url.startsWith("http") ? (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>
                          {item.name}
                        </a>
                      ) : (
                        <Link to={item.url} className="text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>
                          {item.name}
                        </Link>
                      )
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Expandable Drawer for Submenus */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden overflow-hidden border-t lg:block bg-base-200/50 border-base-content/5"
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
                            className="font-bold btn btn-primary btn-ghost btn-xl"
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
