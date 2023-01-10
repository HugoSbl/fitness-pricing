import React, { useState } from "react";
import Modal from "../customComponents/Modal.jsx";
import NavBarPopUp from "./NavBarPopUp.jsx";

const NavbarButton = ({ text, link }) => {
  return (
    <li className="py-2 px-4 ">
      <a
        className="font-bold text-xs hover:underline underline-offset-8"
        href={link}
      >
        {text}
      </a>
    </li>
  );
};

const Navbar = () => {
  return (
    <>
      <NavBarPopUp />
      <div className=" flex bg-slate-600 justify-center">
        <div className="flex justify-around max-w-screen-2xl">
          <div className="flex inline-block items-center justify-center w-1/5 ">
            <img
              className="h-16"
              src="src/assets/fitnessParkLogo.png"
              alt="FitnessPark Logo"
            ></img>
          </div>
          <div className="w-1/2  justify-between  p-6">
            <ul className="flex flex-row gap-y-12 justify-between text-white ">
              <NavbarButton text="Concept" link="" />
              <NavbarButton text="Abonnements" link="" />
              <NavbarButton text="Les clubs" link="" />
              <NavbarButton text="Nos espaces" link="" />
            </ul>
          </div>
          <div className="w-1/5 flex items-center justify-around">
            <img
              className="h-6 m-4"
              src="src/assets/youtube.png"
              alt="Youtube Link"
            />
            <a className="text-yellow-300 font-extrabold text-sm" href="">
              BLOG
            </a>
            <div className="w-2/3 m-4">
              <Modal></Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
