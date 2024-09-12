import React from "react";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdContacts } from "@react-icons/all-files/md/MdContacts";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="container">
      <section>
        <main className="main">
          <section className="leftColumn">
            <img src="/images/moon.png" alt="Moon" className="moonImage" />
          </section>

          <section className="rightColumn">
            <section className="intro">
              <div className="boldHeader">Web Development Portfolio</div>
              <div className="outlinedHeader">
                Courtney
                <br />
                Morris
              </div>
              <div className="lightHeader">Full Stack Software Engineer</div>
            </section>
            <div className="buttons">
              <Link href="/resume">
                <button className="resumeButton">View Resume</button>
              </Link>
              <Link href="/projects">
                <button className="projectsButton">View Projects</button>
              </Link>
            </div>
            <div className="socialIcons">
              <a
                className="socialLinks"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="socialLinks"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a className="socialLinks">
                <MdContacts />
              </a>
            </div>
          </section>
        </main>
      </section>

      <div className="container">
        <section className="previewSection">
          <div className="outlinedHeader">Check out my work</div>
        </section>
      </div>
    </div>
  );
}
