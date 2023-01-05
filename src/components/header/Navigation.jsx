import React, { useState } from "react";
import Modal from "./customComponents/Modal.jsx";

const NavbarButton = ({ text, link }) => {
  return (
    <li className="py-2 px-4">
      <a className="font-bold" href={link}>
        {text}
      </a>
    </li>
  );
};

const NavBarPopUp = () => {
  const [handlePopUp, setHandlePopUp] = useState(true);
  const frenchMonth = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const actualFrenchMonth = frenchMonth[new Date().getMonth()];

  return (
    <div
      className={`w-full bg-yellow-300 flex items-center justify-between transition-all duration-300 overflow-auto ${
        handlePopUp ? "h-10" : "h-0 "
      }
      `}
    >
      <div className="w-1/3"></div>
      <div className={"w-1/3 flex justify-center"}>
        <img className="mx-4" src={"src/assets/angry-emoticone.png"} />

        <p>En {actualFrenchMonth}, frais d&apos;adhésions offerts</p>
      </div>
      <div className="w-1/3 flex flex-row-reverse justify-items ">
        <img
          className="h-6 mx-8"
          onClick={() => setHandlePopUp(false)}
          src="src/assets/close.png"
        />
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <NavBarPopUp />
      <div className=" flex justify-between bg-slate-600">
        <div className="flex inline-block items-center justify-center w-1/5">
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
            <a href="">BLOG</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
