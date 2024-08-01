import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "React Expert", "Professional Coder."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Hasnain Ahmad</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          MERN Stack Developer with two years of hands-on experience in creating
          and managing web applications. My portfolio includes diverse projects
          such as Double Up Marketing, Highlights films, and Solution wired,
          demonstrating my capability in both frontend and backend technologies,
          including React, Node.js, and MongoDB. I communicate effectively,
          ensuring smooth collaboration in team settings, and prioritize meeting
          project deadlines. I'm looking to apply my technical skills and
          collaborative approach in a role that challenges me and allows for
          continued professional growth.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
