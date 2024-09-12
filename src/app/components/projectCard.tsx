import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import Link from "next/link";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

export default function ProjectCard() {
  return (
    <div className="card">
      <div className="cardContent">
        <div className="cardImageContainer">
          <img
            src="../../images/dummySite1.png"
            alt="Site 1"
            className="cardImage"
          />
        </div>
        <div className="boldHeader">Project Name</div>
      </div>
    </div>
  );
}
