import React from "react";
import ProjectCard from "../components/projectCard";

export default function Projects() {
  return (
    <div className="container">
      <title>Projects</title>
      <div className="container">
        <div className="outlinedHeader">My Projects</div>
        <div className="projectCards">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <meta name="description" content="My Projects" />
      <link rel="icon" href="/favicon.ico" />
    </div>
  );
}
