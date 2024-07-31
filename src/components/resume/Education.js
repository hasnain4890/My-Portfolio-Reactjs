import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelors of Computer Engineering"
            subTitle="Comsat University Islamabad (2018 - 2022)"
            result="2.7/4"
            des="Focused on core computer science principles, software development, and practical applications, preparing for a career in technology and innovation."
          />
          <ResumeCard
            title="FSC"
            subTitle="Orbit college (2016 - 2018)"
            result="922/1100"
            des="Completed pre-university education with a focus on science subjects, laying the groundwork for advanced studies in technology and engineering."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Pasban Model School (2014 - 2016)"
            result="913/1100"
            des="Completed foundational education with a broad curriculum, developing essential skills in various subjects, including mathematics and science."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2022 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="FutureNostics - (Aug 2023 - Present)"
            result="Pakistan"
            des="Developing and maintaining software solutions, focusing on cutting-edge 
            technologies and innovative approaches to solve complex problems in the tech industry."
          />
          <ResumeCard
            title="Associate Software Engineer"
            subTitle="Texinity Technologies - (Dec 2022 - July 2023)"
            result="Pakistan"
            des="Specialized in creating responsive and user-friendly web interfaces, 
            enhancing user experience and optimizing performance for digital platforms."
          />{" "}
          <ResumeCard
            title="Front End Intern"
            subTitle="SyntecX Inspiring Realities - (Jul 2022 - Nov 2022)"
            result="Pakistan"
            des="Specialized in creating responsive and user-friendly web interfaces, 
            enhancing user experience and optimizing performance for digital platforms."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
