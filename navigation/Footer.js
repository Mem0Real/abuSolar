import React from "react";
import Image from "next/image";
import mem0real from "../public/images/Mem0Real.png";

const footer = () => {
  return (
    <footer className="text-gray-400 bg-stone-900 body-font mt-12 md:mt-0">
      <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col md:flex-row lg:flex-row">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white border border-y-0 rounded-lg border-r-8 mr-2">
          <span className="ml-3 mr-3 text-xl">AbuSolarTech</span>
        </a>

        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2023 All Rights Reserved
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <span className="font-audioWide mt-6"> Web Developed by: </span>
          <a href="https://mem0real.github">
            <Image
              width={120}
              height={120}
              src={mem0real}
              alt="Mem0Real"
              className="relative"
            />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default footer;
