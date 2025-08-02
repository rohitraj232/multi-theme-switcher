import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  // Access theme data from ThemeContext
  const { theme, setTheme, themes } = useTheme();

  // State to handle mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 shadow-md py-2">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* App Logo */}
        <div className="text-white text-2xl font-bold">MyApp</div>
        
        {/* Desktop Navigation (Visible on md and above) */}
        <nav className="hidden md:flex space-x-6 text-white text-lg">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>

        {/* Theme Selector Dropdown */}
        <select
          onChange={(e) => setTheme(e.target.value)}
          value={theme} 
          className="ml-4 p-1 rounded-md text-dark bg-white border border-1"
        >
          {/* Dynamically render all available themes */}
          {Object.values(themes).map((t) => (
            <option key={t.className} value={t.className}>
              {t.name}
            </option>
          ))}
        </select>

        {/* Hamburger Icon (For Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white ml-2 focus:outline-none"
        >
          {/* Change icon based on isOpen state */}
          {isOpen ? (
            // Close Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu (Only visible when isOpen is true) */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700 px-4 py-3 space-y-2 text-white">
          {/* Close menu when a link is clicked */}
          <Link to="/" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
