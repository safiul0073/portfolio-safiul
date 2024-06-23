import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center container mx-auto">
        <h1 className="text-2xl font-bold">Safiullah</h1>
        <div className="flex md:hidden">
          {" "}
          {/* Show on small screens, hide from medium screens and up */}
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger menu icon */}
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <ul className={`md:flex space-x-4 hidden mt-4 md:mt-0`}>
          {/* Show on medium screens and up, hidden on small screens */}
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="#about">About</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="#projects">Projects</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Show on mobile screens */}
      {isMenuOpen && (
        <ul
          className={`md:hidden flex flex-col space-y-4 mt-4 items-center justify-center md:mt-0`}
        >
          {/* Show on medium screens and up, hidden on small screens */}
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="#about">About</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="#projects">Projects</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
