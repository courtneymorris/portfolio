import React from "react";
import Link from "next/link";

interface MenuProps {
  isMenuOpen: boolean;
}

export default function Menu({ isMenuOpen }: MenuProps) {
  return (
    <div className="menuContainer">
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        {/* // {isMenuOpen ? "menu open" : "menu"} */}
        <Link href="/" className="menuLink">
          Home
        </Link>
        <Link href="/projects" className="menuLink">
          See My Work
        </Link>
        <Link href="/resume" className="menuLink">
          View My Resume
        </Link>
        <Link href="/contact" className="menuLink">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
