import React from "react";
import Image from "next/image";
import mem0real from "../public/images/Mem0Real.png";

const Footer = ({ width, height }) => {
  var size;

  switch (true) {
    case width > 1024 && width <= 1138:
      size = "-45em";
      console.log("1024<x<1280");
      break;
    case width > 1138 && width <= 1280:
      size = "-52em";
      console.log("1024<x<1280");
      break;
    case width > 1280 && width <= 1366:
      size = "-62em";
      console.log("1280<x<1366");
      break;
    case width > 1366:
      size = "-68em";
      console.log("x>1366");
      break;
    default:
      size = "0em";
      console.log("small");
      break;
  }
  return (
    <div className="bg-black text-sm">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* <div className="px-56"></div> */}
        <p className="text-center mt-4 lg:mt-0">
          AST © 2022 All rights reserved
        </p>
        <span className="relative inline-flex items-center justify-center sm:justify-start xl">
          <div
            className={`flex justify-center items-center`}
            // style={{
            //   marginRight: `${size}`,
            // }}
          >
            <span className="font-audioWide"> Web Developed by: </span>
            <a href="https://mem0real.github">
              <Image
                width={120}
                height={120}
                src={mem0real}
                alt="Mem0Real"
                className="relative"
              />
            </a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Footer;
