import React, { useState } from "react";
import home from "./../assets/home.svg";
import commerce from "./../assets/commerce.svg";
import connect from "./../assets/connect.svg";
import business from "./../assets/business-directory.svg";
import chat from "./../assets/chat.svg";
import tv from "./../assets/tv.svg";
import live from "./../assets/live.svg";
import stereo from "./../assets/stereo.svg";
import tickets from "./../assets/tickets.svg";
import profile from "./../assets/userprofile.svg";
import vote from "./../assets/vote.svg";
import education from "./../assets/education.svg";
import signout from "./../assets/signout.svg";
import { sideBar } from "../constants";
import drawer from "./../assets/drawer.svg";
import logo2 from "./../assets/white-logo.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <section className="bg-purple-50 w-[16%] hidden 3xl:p-6 lg:block h-screen scroll overscroll-y-none text-white fixed top-0 left-0 z-20 overflow-y-scroll hide-scrollbar">
        <div className="mt-10 flex flex-col  ">
          {sideBar.map((menu) => (
            <a href="/" className="cursor-ponter hover:white">
              <li
                key={menu.id}
                className="list-none flex items-center p-2 gap-1"
              >
                <img
                  src={
                    menu.img === "home.svg"
                      ? home
                      : menu.img === "connect.svg"
                      ? connect
                      : menu.img === "chat.svg"
                      ? chat
                      : menu.img === "business-directory.svg"
                      ? business
                      : menu.img === "userprofile.svg"
                      ? profile
                      : menu.img === "tv.svg"
                      ? tv
                      : menu.img === "commerce.svg"
                      ? commerce
                      : menu.img === "live.svg"
                      ? live
                      : menu.img === "stereo.svg"
                      ? stereo
                      : menu.img === "vote.svg"
                      ? vote
                      : menu.img === "education.svg"
                      ? education
                      : tickets
                  }
                  alt={menu.name}
                  width={25}
                  height={50}
                />
                <p
                  className={`regular-16 ${
                    menu.name === "Home" ? "text-white" : "text-lilac-50"
                  }`}
                >
                  {menu.name}
                </p>
              </li>
            </a>
          ))}
          <div className="flex items-center gap-1 mt-20 ml-3 mb-10 cursor-pointer">
            <img src={signout} width={25} height={50} alt="logo" />
            <p className="regular-12 lg:regular-16">Signout</p>
          </div>
        </div>
      </section>
      {/* for mobile view */}
      <div>
        <img
          src={drawer}
          width={50}
          height={40}
          alt="drawer"
          className="block fixed lg:hidden left-0 top-1/2 cursor-pointer "
          onClick={toggleDrawer}
        />

        <section
          className={`bg-purple-50 w-[full] block lg:hidden h-screen scroll overscroll-y-none inset-y-0  transform transition-transform duration-300 ease-in-out text-white fixed top-0 left-0 z-20 overflow-y-scroll hide-scrollbar ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img
            src={logo2}
            width={50}
            height={40}
            alt="logo"
            className="m-3 lg:ml-20 block lg:hidden"
          />
          <div className="mt-7 flex flex-col  ">
            {sideBar.map((menu) => (
              <a href="/" className="cursor-ponter hover:white">
                <li
                  key={menu.id}
                  className="list-none flex items-center p-2 gap-1"
                >
                  <img
                    src={
                      menu.img === "home.svg"
                        ? home
                        : menu.img === "connect.svg"
                        ? connect
                        : menu.img === "chat.svg"
                        ? chat
                        : menu.img === "business-directory.svg"
                        ? business
                        : menu.img === "userprofile.svg"
                        ? profile
                        : menu.img === "tv.svg"
                        ? tv
                        : menu.img === "commerce.svg"
                        ? commerce
                        : menu.img === "live.svg"
                        ? live
                        : menu.img === "stereo.svg"
                        ? stereo
                        : menu.img === "vote.svg"
                        ? vote
                        : menu.img === "education.svg"
                        ? education
                        : tickets
                    }
                    alt={menu.name}
                    width={25}
                    height={50}
                  />
                  <p
                    className={`regular-16 ${
                      menu.name === "Home" ? "text-white" : "text-lilac-50"
                    }`}
                  >
                    {menu.name}
                  </p>
                </li>
              </a>
            ))}
            <div className="flex items-center gap-1 mt-20 ml-3 mb-10 cursor-pointer">
              <img src={signout} width={25} height={50} alt="logo" />
              <p className="regular-16">Signout</p>
            </div>
          </div>
          {/* close drawer */}
          {isOpen && (
            <img
              src={drawer}
              width={50}
              height={40}
              alt="drawer"
              className="block fixed lg:hidden right-0 top-1/2 cursor-pointer "
              onClick={toggleDrawer}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
