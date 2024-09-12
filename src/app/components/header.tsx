"use client";

import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { HiOutlineX } from "@react-icons/all-files/hi/HiOutlineX";
import { HiOutlineMenu } from "@react-icons/all-files/hi/HiOutlineMenu";
import Menu from "./menu";
import Link from "next/link";

interface HeaderProps {
  scrollPosition: number;
  isVisible: boolean;
  isMenuOpen: boolean;
}

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClickAway = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest(".menuIconContainer") &&
        !(event.target as HTMLElement).closest(".menu")
      ) {
        handleMenuClickAway();
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleMenuClickAway();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isMenuOpen]);

  // Function to handle scroll event
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Hide navbar when scrolling down, show when scrolling up
    if (currentScrollY > scrollPosition) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }

    setScrollPosition(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header className={isVisible ? "header" : "header hidden"}>
      <div className="navigation">
        <div className="menuIconContainer" onClick={handleMenuClick}>
          {isMenuOpen ? (
            <HiOutlineX className="menuIcon" />
          ) : (
            <HiOutlineMenu className="menuIcon" />
          )}
          {isMenuOpen && <Menu isMenuOpen={isMenuOpen} />}
        </div>
        <div className="logoContainer">
          <Link href="/">
            <img src="/images/logo.png" alt="Moon" className="logo" />
          </Link>
        </div>
      </div>
    </header>
  );
}
