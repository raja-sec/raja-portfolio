import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaSun, FaPalette } from "react-icons/fa";

export default function Navbar() {
  const navLinks = [
    { name: "About", path: "/about" },
    // { name: "Blog", path: "/blog" },
    { name: "Articles", path: "/articles" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#1C1C1B] text-white w-full shadow-md border-b border-gray-800">
      <div className="max-w mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT SECTION — logo, name, menu icon */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="w-8 h-8 bg-pink-500 rounded-sm flex items-center justify-center text-sm font-bold">
            R
          </div>

          {/* Brand Name */}
          <Link
            to="/"
            className="text-xl font-semibold hover:text-pink-400 transition-colors"
          >
            {/* raja.dev */}
            <p>{`{raja}`}</p>
          </Link>

          {/* Sidebar / Mobile Menu */}
          {/* <button className="ml-4 text-gray-400 hover:text-white">
            <FaBars size={20} />
          </button> */}
        </div>

        {/* RIGHT SECTION — nav links + icons */}
        <div className="flex items-center space-x-10">
          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-pink-500"
                      : "text-gray-300 hover:text-white transition-colors"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Socials + Theme */}
          <div className="flex items-center space-x-5">
            {/* Theme buttons */}
            {/* <button className="text-gray-400 hover:text-white">
              <FaSun size={18} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <FaPalette size={18} />
            </button> */}

            {/* Social icons */}
            <a
              href="https://github.com/raja-sec"
              // href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/raja-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}


// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaGithub, FaLinkedin, FaBars, FaSun, FaMoon, FaPalette } from "react-icons/fa";

// export default function Navbar() {
//   const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

//   // Apply theme to document root
//   useEffect(() => {
//     if (theme === "light") {
//       document.documentElement.classList.add("light");
//       document.documentElement.classList.remove("dark");
//     } else {
//       document.documentElement.classList.add("dark");
//       document.documentElement.classList.remove("light");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

//   const navLinks = [
//     { name: "About", path: "/about" },
//     { name: "Articles", path: "/articles" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="bg-dark text-white w-full shadow-md border-b border-gray-800 dark:bg-[#1C1C1B] light:bg-white light:text-black transition-colors duration-300">
//       <div className="max-w mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LEFT SECTION — logo, name, menu icon */}
//         <div className="flex items-center space-x-3">
//           <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-sm font-bold text-white">
//             R
//           </div>
//           <Link
//             to="/"
//             className="text-xl font-semibold hover:text-accent transition-colors"
//           >
//             {`{raja}`}
//           </Link>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="flex items-center space-x-10">
//           {/* Nav Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.path}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   `text-sm font-medium ${
//                     isActive
//                       ? "text-accent"
//                       : "text-gray-300 hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </div>

//           {/* Icons */}
//           <div className="flex items-center space-x-5">
//             {/* Theme Toggle */}
//             <button
//               onClick={toggleTheme}
//               className="text-gray-400 hover:text-accent transition-colors"
//               title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
//             >
//               {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
//             </button>

//             {/* Palette (placeholder / future customization) */}
//             <button className="text-gray-400 hover:text-accent">
//               <FaPalette size={18} />
//             </button>

//             {/* Socials */}
//             <a
//               href="https://github.com/Trilo-C"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-accent"
//             >
//               <FaGithub size={20} />
//             </a>
//             <a
//               href="https://linkedin.com/in/raja-mishra"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-accent"
//             >
//               <FaLinkedin size={20} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
