import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";
import "animate.css";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Menu } from "@headlessui/react";
import SubMenu from "./SubMenu";

const Navbar = () => {
  const router = useRouter();

  const [visibility, setVisibility] = useState(false);
  const [mainVisibility, setMainVisibility] = useState(false);
  const [display, setDisplay] = useState(false);

  const [top, setTop] = useState(false);

  const [mainStatus, setMainStatus] = useState("hiding");
  const [status, setStatus] = useState("hiding");

  const [open, setOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [mainHover, setMainHover] = useState(false);
  const [location, setLocation] = useState('');

  useEffect(() => {
    setLocation(window.location.pathname);
  });

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const [width, height] = useDeviceSize();
  // Hide Navbar on Scroll
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    // Hide Navbar on Scroll
    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 4 || scrollY - lastScrollY < -4)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };

      window.addEventListener("scroll", updateScrollDirection); // add event listener for nav pop
      window.addEventListener("scroll", handleScroll, { passive: true }); // add event listener for current pos

      return () => {
        // Clean Up
        window.removeEventListener("scroll", updateScrollDirection);
        window.removeEventListener("scroll", handleScroll);
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();

  const close = () => {
    open && setOpen(false);
    setDisplay(false);
    // setTop(false);
    setStatus("hiding");
    setTimeout(() => {
      setVisibility(false);
    }, 400);
  };

  const scrollTarget = (target) => {
    scroller.scrollTo(target, { smooth: true, duration: 1800, offset: -60 });
  };

  const scrollToPage = (target) => {
    close();
    setTimeout(() => {
      if (window.location.pathname !== "/") {
        router.replace("/").then(
          setTimeout(() => {
            scrollTarget(target);
          }, 500)
        );
      } else scrollTarget(target);
    }, 300);
  };

  const toggle = () => {
    visibility ? setStatus("hiding") : setStatus("showing");
    width <= 1024 && !visibility && scrollTarget("topper");
    setTimeout(() => {
      setVisibility(!visibility);
    }, 500);
  };

  const topper = () => {
    window.scrollTo({ top: 0, behavior: "auto" });

    setTop(true);
  };

  const toggleMain = () => {
    mainHover && mainVisibility
      ? setMainStatus("hiding")
      : setMainStatus("showing");
    !mainHover && mainVisibility && setMainStatus("hiding");
    width <= 1024 && !mainVisibility && scrollTarget("topper");
    setTimeout(() => {
      setMainVisibility(!mainVisibility);
    }, 500);
  };

  const dropDownStatus = (status) => {
    setDisplay(status);
  };

  const dropDownData = [
    {
      name: "Batteries",
      location: "batteries",
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
      location: "powInv",
      description: "Easily Convert DC to AC.",
    },
    {
      name: "Solar Lighting System",
      location: "soli",
      description: "Harness the Sun, get infinite energy supply.",
    },
    {
      name: "Solar Charge Controller",
      location: "socc",
      description: "Maintain your preferred charge amount.",
    },
    {
      name: "Solar Inverter",
      location: "soInv",
      description: "Easily Convert Solar Power to AC.",
    },
    {
      name: "Solar Panel",
      location: "sopan",
      description: "Top of the line solar recieving plates.",
    },
    {
      name: "Solar Power System",
      location: "sops",
      description: "Control power flow from solar energy.",
    },
  ];

  return (
    <ClickAwayListener
      onClickAway={() => {
        close();
      }}
    >
      <div
        className={`${display ? "" : "fixed"}  z-50 w-full ${
          !open && scrollDirection === "down" ? "-top-32" : "top-0"
        } transition-all duration-500 `}
      >
        {/* <div
        className={`${
          display ? "" : scrollDirection === "down" ? "-top-32" : "fixed top-0"
        }  z-50 w-full ${
          !open && scrollDirection === "down" ? "-top-32" : "top-0"
        } transition-all duration-500`}
      > */}
        {display && !top ? topper() : ""}
        <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
          <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-4">
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
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
                } flex-col flex-grow my-4 md:pb-0 md:flex md:justify-end md:flex-row z-50`}
              >
                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/"
                >
                  Home
                </Link>
                <Menu>
                  {({ open }) => (
                    <>
                      <div className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                        <Menu.Button>
                          <div className="flex mx-3">
                            <span> Solutions </span>
                            <svg
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              className={`${
                                open ? "rotate-180" : "rotate-0"
                              } inline w-5 h-5 ml-1 transition-transform duration-200 transform`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </Menu.Button>
                      </div>
                      <Menu.Items>
                        <div
                          className={`flex flex-col absolute bg-white w-fit mt-12`}
                        >
                          <Menu.Item>
                            <Link
                              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="/solutions/projects"
                            >
                              <div className="flex mx-3 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="13"
                                  height="13"
                                  fill="currentColor"
                                  className="bi bi-arrow-return-right"
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
                                    id="mainIconPathAttribute"
                                  ></path>
                                </svg>
                                <span className="pl-2">Projects</span>
                              </div>
                            </Link>
                          </Menu.Item>

                          <Menu.Item>
                            <Link
                              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                              href="/solutions/services"
                            >
                              <div className="flex mx-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="13"
                                  height="13"
                                  fill="currentColor"
                                  className="bi bi-arrow-return-right"
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
                                    id="mainIconPathAttribute"
                                  ></path>
                                </svg>
                                <span className="pl-2"> Services</span>
                              </div>
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <SubMenu
                              dropDownStatus={dropDownStatus}
                              width={width}
                              topper={topper}
                            />
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </>
                  )}
                </Menu>

                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/contact"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Navbar;

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};
