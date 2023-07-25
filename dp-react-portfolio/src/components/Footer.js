import React from "react";

// Import the PNG images for the icons
import GitHubIcon from "./icons/github-mark-white.png";
import LinkedInIcon from "./icons/LinkedIn-Blue-14-╬ô├ñ├│@2x.png";
import TwitterIcon from "./icons/2021 Twitter logo - blue.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center">
        <a
          href="https://github.com/dkpatzer/DP-React-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-4 hover:text-indigo-500"
        >
          <img src={GitHubIcon} alt="GitHub Icon" className="w-6 h-6" />
        </a>
        <a
          href="www.linkedin.com/in/david-patzer-198b2540"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-4 hover:text-indigo-500"
        >
          <img src={LinkedInIcon} alt="LinkedIn Icon" className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/DavidPatze95629"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-500"
        >
          <img src={TwitterIcon} alt="Twitter Icon" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}

