import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.scss";
import { Bars3Icon } from "@heroicons/react/16/solid";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
    <header className={`${styles.header} ${isVisible ? "" : styles.hidden}`}>
      <div className={styles.navigation}>
        <div className={styles.logoContainer}>
          <img src="/images/logo.png" alt="Moon" className={styles.logo} />
        </div>
        <div className={styles.menuIcon}>
          <Bars3Icon className={styles.menuIcon} />
        </div>
      </div>
      <section className={styles.horizontalLine}>
        <img
          src="/images/horizontalLine.png"
          alt="Horizontal Line"
          className={styles.horizontalLineImage}
        />
      </section>
    </header>
  );
}
