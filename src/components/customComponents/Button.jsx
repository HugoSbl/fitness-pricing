import { React } from "react";

const Button = ({ handleClick, buttonText }) => (
  <button
    className="inline-block w-full px-6 py-2.5 bg-yellow-300 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-500 active:shadow-lg transition duration-150 select-none ease-in-out"
    type="button"
    onClick={handleClick}
  >
    <span className={"text-slate-600 font-extrabold"}>{buttonText}</span>
  </button>
);

export default Button;
