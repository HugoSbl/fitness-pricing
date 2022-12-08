import React from "react";

const NavbarButton = ({ text, link }) => {
  return (
    <li className="py-2 px-4">
      <a href={link}>{text}</a>
    </li>
  );
};

const Navbar = () => {
  return (
    <div className="border-2 border-solid border-red-500 flex justify-end ">
      <div className="inline-block justify-center border-solid border-2 border-black p-6  items-end">
        <ul className="flex flex-row gap-y-12">
          <NavbarButton text="accueil" link="" />
          <NavbarButton text="Projets" link="" />
          <NavbarButton text="contact" link="" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
