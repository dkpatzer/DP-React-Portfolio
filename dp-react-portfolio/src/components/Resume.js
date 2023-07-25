import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { skills } from "../data";

export default function Resume() {
  return (
    <section id="resume" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My Resume
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
          </p>
        </div>
        <div className="flex flex-col md:items-center md:flex-row">
          <div className="md:w-1/3 md:pr-4">
            <h2 className="text-xl font-medium text-white mb-4">Education</h2>
            <ul className="list-disc list-inside">
            <li className="mb-2">
                Full Stack Coding Bootcamp
                <br />
                Northwestern UNiversity, 2023
              </li>
              <li className="mb-2">
                M.D.
                <br />
                Feinberg School of Medicine Northwestern UNiversity, 19XX - 19XX
              </li>
              <li className="mb-2">
                BAchelor's Degree in Biology and Literature
                <br />
                Illinois Wesleyan UNiversity, 19XX - 19XX
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 md:px-4 md:border-l md:border-r border-gray-700">
            <h2 className="text-xl font-medium text-white mb-4">Work Experience</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                Web Developer Intern
                <br />
                ABC Company, 20XX - 20XX
              </li>
              <li className="mb-2">
                Frontend Developer
                <br />
                XYZ Agency, 20XX - Present
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 md:pl-4">
            <h2 className="text-xl font-medium text-white mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              {skills.map((skill) => (
                <li key={skill} className="mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* ... (your other content) ... */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img 
              className="object-cover object-center rounded"
              alt="A photo of David Patzer"
              src="/images/Portfolio personal photo.jpeg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

