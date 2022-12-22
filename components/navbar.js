import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavStyle from "./nav.module.css";
import { Menu } from "@headlessui/react";
import Scroll, { scroller } from "react-scroll";
import { useRouter } from "next/router";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const scrollTarget = (target) => {
    scroller.scrollTo(target, { smooth: true, duration: 1300, offset: -80 });
  };

  const scrollToPage = (target) => {
    if (window.location.pathname !== "/") {
      router.replace("/").then(
        setTimeout(() => {
          scrollTarget(target);
        }, 500)
      );
    } else scrollTarget(target);
  };

  return (
    <nav
      className={`flex flex-col fixed w-full h-24 z-10 border border-x-0 border-t-0 border-spacing-36 border-b-rose-600 ${
        navbar ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="container m-auto flex flex-col lg:flex-row justify-between items-center">
        <div className={`${NavStyle.navStart} order-2`}>
          <Menu>
            <Menu.Button className="hover:border hover:border-b-violet-600 hover:border-x-0 hover:border-t-0 rounded-lg lg:text-lg">
              Categories
            </Menu.Button>
            <Menu.Items>
              <div className="flex flex-col absolute bg-black text-center text-white h-fit p-4 lg:px-16 rounded-3xl mt-7">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active && "bg-blue-500"
                      } btn btn-ghost btn-outline sm:btn-xs md:btn-sm rounded-full my-2 lg:btn-md text-white`}
                      onClick={() => scrollToPage("batteries")}
                      duration={500}
                    >
                      Batteries
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active && "bg-blue-500"
                      } btn btn-ghost btn-outline sm:btn-xs md:btn-sm rounded-full my-2 lg:btn-md text-white`}
                      onClick={() => scrollToPage("lineIU")}
                      duration={500}
                    >
                      Line Interactive UPS
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active && "bg-blue-500"
                      } btn btn-ghost btn-outline sm:btn-xs md:btn-sm rounded-full my-2 lg:btn-md text-white`}
                      onClick={() => scrollToPage("onlineU")}
                      duration={500}
                    >
                      Online UPS
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active && "bg-blue-500"
                      } btn btn-ghost btn-outline sm:btn-xs md:btn-sm rounded-full my-2 lg:btn-md text-white`}
                      onClick={() => scrollToPage("powInv")}
                      duration={500}
                    >
                      Power Inverter
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active && "bg-blue-500"
                      } btn btn-ghost btn-outline sm:btn-xs md:btn-sm rounded-full my-2 lg:btn-md text-white`}
                      onClick={() => scrollToPage("soli")}
                      duration={500}
                    >
                      Solar Lighting System
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active && "bg-blue-500"
                      } btn btn-ghost btn-outline sm:btn-xs md:btn-sm rounded-full my-2 lg:btn-md text-white`}
                      onClick={() => scrollToPage("socc")}
                      duration={500}
                    >
                      Solar Charge Controller
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active && "bg-blue-500"
                      } btn btn-ghost btn-outline sm:btn-xs md:btn-sm rounded-full my-2 lg:btn-md text-white`}
                      onClick={() => scrollToPage("soInv")}
                      duration={500}
                    >
                      Solar Inverter
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active && "bg-blue-500"
                      } btn btn-ghost btn-outline sm:btn-xs md:btn-sm rounded-full my-2 lg:btn-md text-white`}
                      onClick={() => scrollToPage("sopan")}
                      duration={500}
                    >
                      Solar Panel
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active && "bg-blue-500"
                      } btn btn-ghost btn-outline sm:btn-xs md:btn-sm rounded-full my-2 lg:btn-md text-white`}
                      onClick={() => scrollToPage("sops")}
                      duration={500}
                    >
                      Solar Power System
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>

        <div className={`${NavStyle.navMiddle} lg:order-2 order-1`}>
          <Link className="text-3xl text-center font-montserrat" href="/">
            Abu Solar Technology
          </Link>
        </div>
        <div className={`${NavStyle.navEnd} order-2`}>
          <ul className="flex justify-between items-center">
            <button className="lg:text-lg rounded-lg hover:border hover:border-b-violet-600 hover:border-x-0 hover:border-t-0">
              <Link href="/about">About</Link>
            </button>
            <button className="lg:text-lg rounded-lg pr-2 ml-3 hover:border hover:border-b-violet-600 hover:border-x-0 hover:border-t-0">
              <Link href="/contact">Contact Us</Link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
