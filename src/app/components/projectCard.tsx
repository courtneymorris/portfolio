import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
import Link from "next/link";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

export interface ProjectCardProps {
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  url: string;
  github: string;
}

export default function ProjectCard({
  title,
  description,
  desktopImage,
  mobileImage,
  url,
  github,
}: ProjectCardProps) {
  return (
    <div className="card">
      <div className="card-body">
        <img
          src={desktopImage}
          alt="Site 1"
          className="cardImage img-thumbnail"
        />
        <h1 className="card-title">{title}</h1>
        <div className="showOnHover container">
          <h1 className="hoverTitle">{title}</h1>
          <div className="cardImageContainer">
            <img src={mobileImage} alt="Site 1" className="cardMobileImage" />
          </div>
          <div className="cardButtons">
            <button className="urlButton">
              <Link href={url}>
                <FaExternalLinkAlt />
              </Link>
            </button>
            <button className="githubButton">
              <Link href={github}>
                <FaGithub />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
