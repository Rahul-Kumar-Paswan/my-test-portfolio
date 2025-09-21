import { useState, useEffect, useRef } from "react";
import profileLogo from "/src/assets/profile.svg";
import { FaSun, FaMoon, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

// Navigation Data (single source of truth)
const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "About",
    href: "#about",
    children: [
      { label: "Education", href: "#education", icon: "🎓", desc: "My academic journey and qualifications" },
      { label: "Internships", href: "#internships", icon: "👨‍💻", desc: "My professional journey and experiences as an intern" },
      { label: "Certifications", href: "#certifications", icon: "📜", desc: "Industry recognized certifications" },
      { label: "Achievements", href: "#achievements", icon: "🏆", desc: "Awards, honors, and recognitions" },
      { label: "Courses", href: "#courses", icon: "📚", desc: "Completed online and offline courses" },
      { label: "Testimonials", href: "#testimonials", icon: "💬", desc: "What others say about working with me" },
    ],
  },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef(null);

  // Persist theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className={`sticky z-50 flex justify-center ${mobileOpen ? "top-0" : "top-4"}`}>
      <div className="bg-darkbg dark:bg-darkbg2 rounded-2xl shadow-2xl mx-4 w-full max-w-6xl">
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 text-black dark:text-white">
          {/* Logo */}
          <a href="/" className="flex items-center select-none flex-shrink-0">
            <img
              src={profileLogo}
              alt="logo"
              className="h-10 w-10 rounded-full mr-3"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <span className="text-xl md:text-2xl font-bold">
              <span className="text-gradient-1 mr-1">RahulVerse</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center font-medium mx-auto">
            {navItems.map((item) =>
              !item.children ? (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                      item.label === "Home"
                        ? "bg-accent/10 text-accent shadow"
                        : "hover:bg-accent/10 hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="px-4 py-2 rounded-full hover:bg-accent/10 hover:text-accent cursor-pointer flex items-center gap-1 select-none transition-all duration-300"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.label} <FaChevronDown size={14} />
                  </a>
                    <div
                      className="absolute left-0 sm:left-[25%] top-full mt-2
                                bg-darkbg dark:bg-darkbg2
                                rounded-xl shadow-lg
                                w-[420px] sm:w-[480px]    /* 🔹 adjust this for horizontal size */
                                px-4 py-4     /* 🔹 adjust this for inner spacing */
                                grid grid-cols-2 gap-x-4 gap-y-3 /* 🔹 adjust cols & spacing */
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                transition-all duration-200 z-50"
                    >
                      {item.children.map((sub) => (
                        <a key={sub.label} href={sub.href} className="flex flex-col justify-start p-2 rounded-lg hover:bg-accent/10 transition">
                          <div className="flex items-center gap-1 mb-0.5">
                            <span className="text-lg">{sub.icon}</span>   {/* smaller emoji */}
                            <span className="font-semibold text-sm">{sub.label}</span>
                          </div>
                          <span className="text-xs text-gray-400 leading-snug">{sub.desc}</span>
                        </a>
                      ))}
                    </div>
                </li>
              )
            )}
          </ul>

          {/* Theme Toggle + Hamburger */}
          <div className="md:flex md:items-center md:gap-2 flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 bg-darkbg/90 dark:bg-lightbg/80 text-accent hover:text-white rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <span className={`block transition-transform duration-500 ${theme === "dark" ? "rotate-[360deg]" : "rotate-0"}`}>
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </span>
            </button>
            <button
              className="md:hidden p-2 rounded-full focus:outline-none"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <FaBars size={22} />
            </button>
          </div>
        </nav>

        {/* Mobile Sidebar */}
        <div
          ref={mobileRef}
          className={`md:hidden fixed inset-0 w-full z-50 transform transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)}></div>

          <div className="relative bg-darkbg/105 dark:bg-darkbg2/105 rounded-b-2xl shadow-lg max-w-full mx-auto overflow-hidden backdrop-blur-lg">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <a href="/" className="flex items-center select-none">
                <img
                  src={profileLogo}
                  alt="logo"
                  className="h-10 w-10 rounded-full mr-3"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <span className="text-xl font-bold text-gradient-1">RahulVerse</span>
              </a>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle Dark Mode"
                  className="p-2 bg-darkbg/90 dark:bg-lightbg/80 text-accent hover:text-white rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <span className={`block transition-transform duration-500 ${theme === "dark" ? "rotate-[360deg]" : "rotate-0"}`}>
                    {theme === "dark" ? <FaSun /> : <FaMoon />}
                  </span>
                </button>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-full focus:outline-none"
                >
                  <FaTimes size={22} />
                </button>
              </div>
            </div>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-1 w-full px-6 pb-6">
              {navItems.map((item) =>
                !item.children ? (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="w-full block px-4 py-3 rounded-lg hover:bg-accent/20 hover:text-accent text-lg font-medium transition-all duration-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <details className="w-full group">
                      <summary className="flex items-center px-4 py-3 rounded-lg hover:bg-accent/20 hover:text-accent cursor-pointer text-lg font-medium transition-all duration-200">
                        {item.label} <FaChevronDown size={14} className="ml-1" />
                      </summary>
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {item.children.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="text-sm hover:text-accent py-1"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.icon} <span className="font-semibold">{sub.label}</span>
                          </a>
                        ))}
                      </div>
                    </details>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
