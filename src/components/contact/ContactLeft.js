import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Muhammad Imtiaz</h3>
        <p className="text-lg font-normal text-gray-400">
          DEVOPS Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          A professional individual having 5 years of industry experience in designing
          and architecting solutions for multiple projects, On-prem and cloud, while ensuring reliability, quality, and time to market. With a
          strong track record of completing numerous impactful projects.
          Proficient in a range of DevOps tech stacks including popular public Cloud providers (AWS & GCP), Docker, 
          Kubernetes, CI/CD, Logging & monitoring, Ansible & Terraform (IaC tool), etc. 
          DevOps Technologies, Cloud, and Containerization are my areas of expertise.
          Leading a team of DevOps engineers, enabling them to onboard quickly and mentoring them technically.

          {/* MERN Stack Developer with three years of hands-on experience in
          creating and managing web applications. My portfolio includes diverse
          projects such as Arthur.ai, AMC, and ShareRegistrar, demonstrating my
          capability in both frontend and backend technologies. I'm looking to
          apply my technical skills and collaborative approach in a role that
          challenges me and allows for continued professional growth. */}
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+92 3082858985</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">imtiaz9832@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            {/* <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            > */}
            <FaFacebookF />
            {/* </a> */}
          </span>
          <span className="bannerIcon">
            <a
              href="https://github.com/Muhammad-Imtiaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/muhammad-imtiaz-alam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
