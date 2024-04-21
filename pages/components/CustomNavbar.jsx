import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
    dropdown: [
      { title: "Our Story", path: "/our-story" },
      { title: "Team", path: "/team" },
    ],
  },
  {
    title: "Assessments",
    path: "#assessments",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Treatments",
    path: "#treatments",
  },
  {
    title: "Blog",
    path: "#blog",
  },
  {
    title: "Gallery",
    path: "#gallery",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const CustomNavbar = () => {
  const [navbaropen, setNavbarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement your search functionality here
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80 border-b-2 border-gray-300"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="flex items-center">
        <img src="/logo2.png" alt="Logo" className="h-16 md:h-18 pl-18" />
        </Link>
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="border rounded px-3 py-1 pl-8 mr-4 bg-transparent text-sm text-white"
          />
          <img src="/images/search.png" alt="Search Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4" />
        </div>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbaropen)}
            className="flex items-center px-3 py-2 border rounded-full text-white bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500"
          >
            {navbaropen ? <XMarkIcon className="h-4 w-4" /> : <Bars3Icon className="h-4 w-4" />}
          </button>
        </div>
        <div className={`menu ${navbaropen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
          <ul className="flex flex-col md:flex-row p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 mt-0 text-white text-sm">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.dropdown ? (
                  <div className="relative flex items-center"> {/* Added flex and items-center */}
                    <NavLink href={link.path} title={link.title} />
                    <button onClick={toggleDropdown} className="ml-2">
                      <img src="/images/dropdown.png" alt="Dropdown Icon" className="h-3 w-3" />
                    </button>
                    {dropdownOpen && (
                      <ul className="absolute top-full left-0 bg-[#121212] text-white rounded-md mt-2">
                        {link.dropdown.map((sublink, subIndex) => (
                          <li key={subIndex}>
                            <NavLink href={sublink.path} title={sublink.title} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink href={link.path} title={link.title} />
                )}
              </li>
            ))}
            <li className="ml-4 pl-14">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-full px-3 py-1 text-sm">
                +918425993294
              </button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default CustomNavbar;
