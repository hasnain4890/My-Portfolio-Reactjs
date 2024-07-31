import React from "react";
import Title from "../layouts/Title";
import {
  mzadqatar,
  breezeline,
  amc,
  authur,
  hightlights,
  solution,
  doubleup,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Highlight Films"
          des="Highlight Films is an internationally recognized video, film, and television production company, providing professional production services across the Middle East."
          src={hightlights}
        />
        <ProjectsCard
          title="SolutionWired"
          des="Solution Wired offers a comprehensive spectrum of services, including expert electrical installations, meticulous maintenance, and reliable gas solutions."
          src={solution}
        />
        <ProjectsCard
          title="Double Up Marketing"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={doubleup}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={amc}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={mzadqatar}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={authur}
        />
      </div>
    </section>
  );
};

export default Projects;
