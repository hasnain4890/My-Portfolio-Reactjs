import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["DEVOPS Engineer", "Cloud Architect", "Kubernetes Expert."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl text-center md:text-start md:text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Muhammad Imtiaz</span>
        </h1>
        <h2 className="text-xl text-center md:text-start md:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          A professional individual having 5 years of industry experience in designing
          and architecting solutions for multiple projects, On-prem and cloud, while ensuring reliability, quality, and time to market. With a
          strong track record of completing numerous impactful projects.
          Proficient in a range of DevOps tech stacks including popular public Cloud providers (AWS & GCP), Docker, 
          Kubernetes, CI/CD, Logging & monitoring, Ansible & Terraform (IaC tool), etc. 
          DevOps Technologies, Cloud, and Containerization are my areas of expertise.
          Leading a team of DevOps engineers, enabling them to onboard quickly and mentoring them technically.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
