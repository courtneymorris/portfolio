import React from "react";
import Header from "../components/header";
import Footer from "@/components/footer";
import styles from "../styles/LandingPage.module.scss";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdContacts } from "@react-icons/all-files/md/MdContacts";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.leftColumn}>
          <img src="/images/moon.png" alt="Moon" className={styles.moonImage} />
        </section>

        <section className={styles.rightColumn}>
          <section className={styles.intro}>
            <div className={styles.boldHeader}>Web Development Portfolio</div>
            <div className={styles.outlinedHeader}>Courtney Morris</div>
            <div className={styles.lightHeader}>
              Full Stack Software Engineer
            </div>
          </section>
          <div className={styles.buttons}>
            <button className={styles.resumeButton}>View Resume</button>
            <button className={styles.projectsButton}>View Projects</button>
          </div>
          <div className={styles.socialIcons}>
            <a
              className={styles.socialLinks}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className={styles.socialLinks}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a className={styles.socialLinks}>
              <MdContacts />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
