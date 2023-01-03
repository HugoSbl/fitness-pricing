import React from "react";
import Button from "./customComponents/Button.jsx";
import Modal from "./customComponents/Modal.jsx";

const NavbarButton = ({ text, link }) => {
  return (
    <li className="py-2 px-4">
      <a href={link}>{text}</a>
    </li>
  );
};

const Navbar = () => {
  return (
    <div className=" flex justify-between bg-slate-600">
      <div className="flex inline-block items-center w-1/5">
        <img
          className="h-16"
          src="src/assets/fitnessParkLogo.png"
          alt="FitnessPark Logo"
        ></img>
      </div>
      <div className="w-1/2  justify-between border-solid border-2 border-black p-6">
        <ul className="flex flex-row gap-y-12 justify-between text-white ">
          <NavbarButton text="Concept" link="" />
          <NavbarButton text="Abonnements" link="" />
          <NavbarButton text="Les clubs" link="" />
          <NavbarButton text="Nos espaces" link="" />
        </ul>
      </div>
      <div className="w-1/5 flex items-center justify-end">
        <div className="w-2/3 m-4">
          <Modal></Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
