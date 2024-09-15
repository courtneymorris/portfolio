import React from "react";
import ProjectCard from "../components/projectCard";
import dummyData from "../../dummyData.json";

interface ProjectCardProps {
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  url: string;
  github: string;
}

export default function Projects() {
  return (
    <div className="container text-center">
      <title>Projects</title>
      <div className="outlinedHeader">Cool stuff</div>
      <h2 className="fancyHeader">I've made for the web</h2>
      <div className="projectCards">
        {dummyData.data[0].projectCards.map(
          (projectCard: ProjectCardProps, index: number) => (
            <ProjectCard key={index} {...projectCard} />
          )
        )}
      </div>
      <meta name="description" content="My Projects" />
      <link rel="icon" href="/favicon.ico" />
    </div>
  );
}
