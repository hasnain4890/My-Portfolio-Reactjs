import React from "react";
import Title from "../layouts/Title";
import {
  mzadqatar,
  hightlights,
  solution,
  doubleup,
  atlanta,
  futurenostics,
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
          link="https://www.highlight.co.il/"
        />
        <ProjectsCard
          title="SolutionWired"
          des="Solution Wired offers a comprehensive spectrum of services, including expert electrical installations, meticulous maintenance, and reliable gas solutions."
          src={solution}
          link="https://www.solutionwired.co.uk/"
        />
        <ProjectsCard
          title="Double Up Marketing"
          des="Double Up Marketing Group stands as the premier performance marketing agency for growing E-commerce brands, law firms and value-add partnerships."
          src={doubleup}
          link="https://doubleupmarketing.io/"
        />
        <ProjectsCard
          title="Futurenostics"
          des="Developed a professional company services website for Futurenostics, highlighting key offerings, client testimonials, and enabling easy contact and service inquiries through an intuitive interface."
          src={futurenostics}
          link="https://www.futurenostics.com/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Developed a comprehensive e-commerce website, enabling seamless online shopping with features such as user-friendly navigation, secure payment processing, and real-time order tracking."
          src={mzadqatar}
          link="https://www.futurenostics.com/"
        />
        <ProjectsCard
          title="Atlanta Happens"
          des="Atlanta Happens have expertise in many aspects of personal injury law.They fight to ensure for clients and their families receive the compensation, care and support they deserve."
          src={atlanta}
          link="https://www.atlantahappens.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
