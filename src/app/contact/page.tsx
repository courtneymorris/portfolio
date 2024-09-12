import React from "react";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container">
      <main className="main">
        <section className="leftColumn">
          <img src="/images/moon.png" alt="Moon" className="moonImage" />
        </section>
        <section className="rightColumn">
          <section className="intro">
            <div className="outlinedHeader">Contact</div>
            <div className="lightHeader">Full Stack Software Engineer</div>
          </section>
          <div className="buttons">
            <Link href="/resume">
              <button className="resumeButton">View Resume</button>
            </Link>
          </div>
          <div className="socialIcons">
            <a className="socialLinks" href="https://instagram.com">
              <FaGithub />
            </a>
            <a className="socialLinks" href="https://instagram.com">
              <FaLinkedin />
            </a>
            <a className="socialLinks" href="https://instagram.com">
              <MdEmail />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
