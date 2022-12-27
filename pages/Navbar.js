import React, { useState, useRef } from "react";
import { scroller } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import "animate.css";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);

  const drop1Ref = useRef();
  const drop2Ref = useRef();

  const btn1Ref = useRef();
  const btn2Ref = useRef();

  // Open & Close the First Dropdown
  const openDrop1 = () => {
    setDrop1(true);
  };

  const closeDrop1 = () => {
    setDrop1(false);
    setDrop2(false);
  };

  // Open & Close the Second Dropdown
  const openDrop2 = () => {
    setDrop2(true);
  };

  const closeDrop2 = () => {
    setDrop2(false);
  };

  // Navigate to Products page then scroll to appropriate location

  const scrollTarget = (target) => {
    scroller.scrollTo(target, { smooth: true, duration: 1300, offset: -50 });
    setDrop1(false);
  };

  const scrollToPage = (target) => {
    close();
    if (window.location.pathname !== "/solutions/products") {
      router.replace("/solutions/products").then(
        setTimeout(() => {
          scrollTarget(target);
        }, 700)
      );
    } else scrollTarget(target);
  };

  const dropDownData = [
    {
      name: "Batteries",
      location: "battery",
      description: "Reliable & Durable.",
    },
    {
      name: "Line Interactive UPS",
      location: "lineIU",
      description: "Save your work incase of power outage.",
    },
    {
      name: "Online UPS",
      location: "onlineU",
      description: "Protect your device from voltage spike.",
    },
    {
      name: "Power Inverter",
      location: "powinv",
      description: "Easily Convert DC to AC.",
    },

    {
      name: "Solar Charge Controller",
      location: "socc",
      description: "Maintain your preferred charge amount.",
    },
    {
      name: "Solar Inverter",
      location: "solarinv",
      description: "Easily Convert Solar Power to AC.",
    },
    {
      name: "Solar Lighting System",
      location: "soli",
      description: "Harness the Sun, get infinite energy supply.",
    },
    {
      name: "Solar Panel",
      location: "sopan",
      description: "Top of the line solar recieving plates.",
    },
    {
      name: "Solar Power System",
      location: "sps",
      description: "Control power flow from solar energy.",
    },
  ];

  return (
    <ClickAwayListener onClickAway={() => closeDrop1()}>
      <div className="z-50">
        <div className={`z-30 w-full`}>
          <div className="antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-300">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-4">
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
                >
                  Abu Solar Technology
                </Link>
                <button
                  className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>
              <nav
                className={`${
                  open ? "flex" : "hidden"
                } flex-col flex-grow my-4 md:pb-0 md:flex md:justify-end md:flex-row`}
              >
                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/"
                >
                  Home
                </Link>
                <button
                  ref={btn1Ref}
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 hover:cursor-pointer focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    drop1 ? closeDrop1() : openDrop1();
                  }}
                >
                  <div className="flex mx-3">
                    <span>Solutions</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className={`${
                        drop1 ? "rotate-180" : "rotate-0"
                      } inline w-5 h-5 ml-1 transition-transform duration-200 transform`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>

                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/contact"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Dropdown 1 */}
        <div className={`relative w-screen z-40 `}>
          <div ref={drop1Ref} className={`${!drop1 ? "hidden" : "block"}`}>
            <div className="h-16 bg-white text-black flex justify-between items-center">
              <Link
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="/solutions/projects"
              >
                Projects
              </Link>
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  ref={btn2Ref}
                  onClick={() => (drop2 ? closeDrop2() : openDrop2())}
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 hover:cursor-pointer focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  <div className="flex mx-3">
                    <span>Products</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className={`${
                        drop2 ? "rotate-180" : "rotate-0"
                      } inline w-5 h-5 ml-1 transition-transform duration-200 transform`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <Link
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="/solutions/services"
              >
                Services
              </Link>
            </div>
          </div>
        </div>

        {/* Dropdown 2 */}
        <div className={`relative w-screen z-40`}>
          <div
            ref={drop2Ref}
            className={`${!drop1 || !drop2 ? "hidden" : "block"}`}
          >
            <div className="bg-white text-black flex flex-col flex-wrap">
              {dropDownData.map((dropDownItem, index) => {
                return (
                  <button
                    key={index + dropDownItem}
                    className="flex justify-center items-center bg-transparent hover:cursor-pointer hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline border-black border border-t-0 border-l-0 border-r-1 w-52 p-2 shadow-2xl border-opacity-30 rounded-md"
                    onClick={() => scrollToPage(dropDownItem.location)}
                  >
                    <div className="text-center">
                      <p className="font-semibold">{dropDownItem.name}</p>
                      <p className="text-sm">{dropDownItem.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Navbar;
