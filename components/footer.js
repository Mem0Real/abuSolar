import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-center h-24 flex flex-col lg:flex-row justify-between items-center">
      <p className="text-center lg:basis-full lg:ml-56 sm:mt-12 xs:mt-12">
        AST © Copyright 2022-2024
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <div className="flex justify-center items-center">
          <span className="font-audioWide"> Web Developed by: </span>
          <img
            width="40%"
            height="10%"
            src="/images/Mem0Real.png"
            alt="Mem0Real"
            className="relative"
          />
        </div>
      </span>
    </div>
  );
}

export default Footer