
import React from "react";
import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 border-t border-gray-800 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} European Accessibility Act Countdown
        </div>
        <div className="flex items-center text-gray-300 text-sm">
          <span>Crafted by Sambuxc + AI</span>
          <a 
            href="https://github.com/Sambuxc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-2 p-2 rounded-full hover:bg-gray-800 transition-colors inline-flex items-center"
            aria-label="GitHub Profile"
          >
            <Github size={16} className="text-blue-400 hover:text-blue-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};
