import React, { useState } from "react";
import { useRouter } from "next/router";
import { Menu } from "@headlessui/react";
import { scroller } from "react-scroll";

const SubMenu = ({ dropDownStatus, width, topper }) => {
  const router = useRouter();

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

  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  const close = () => {
    open && setOpen(false);
    display && setDisplay(false);
  };

  const scrollTarget = (target) => {
    scroller.scrollTo(target, { smooth: true, duration: 1300, offset: -50 });
  };

  const scrollToPage = (target) => {
    close();
    if (window.location.pathname !== "/solutions/products") {
      setTimeout(() => {
        router.replace("/solutions/products").then(
          setTimeout(() => {
            scrollTarget(target);
          }, 500)
        );
      }, 2000);
    } 

    else scrollTarget(target);
  };

  return (
    <Menu>
      {({ open }) => (
        <>
          <div className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            <Menu.Button
              onClick={() => {
                topper();
              }}
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
                <span className="pl-2"> Products</span>
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
          {open ? dropDownStatus(true) : dropDownStatus(false)}
          <div className={`bg-white`}>
            <Menu.Items>
              {dropDownData.map((dropDownItem, key) => {
                return (
                  <Menu.Item key={key}>
                    <a
                      className="flex justify-start items-start rounded-lg bg-transparent p-2 hover:cursor-pointer dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => scrollToPage(dropDownItem.location)}
                    >
                      <div className="ml-3">
                        <p className="font-semibold">{dropDownItem.name}</p>
                        <p className="text-sm">{dropDownItem.description}</p>
                      </div>
                    </a>
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </div>
        </>
      )}
    </Menu>
  );
};

export default SubMenu;
