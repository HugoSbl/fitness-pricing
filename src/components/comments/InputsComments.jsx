import { React, useEffect } from "react";

const InputComments = ({
  value,
  handleInputChange,
  isModify,
  handleClick,
  isDeployed,
  setIsDeployed,
}) => {
  return (
    <div className="bg-slate-600 p-4 rounded-lg  border-red-500 border-2">
      <div className="py-2 bg-slate-600 text-blue-50 font-extrabold text-center ">
        COMMENTAIRES
      </div>
      <textarea
        className={`text-gray-700 bg-white bg-clip-padding border border-solid 
                border-gray-300 rounded-lg ease-in-out my-4 transition-all delay-75
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                block w-full px-3 py-1.5 text-base font-normal 
                ${isDeployed ? "h-[150px]" : "h-[50px]"}`}
        id="commentInput"
        rows="2"
        value={value}
        placeholder="Votre message"
        onChange={handleInputChange}
        onClick={() => setIsDeployed(true)}
      ></textarea>

      <button
        className="inline-block w-full px-6 py-2.5  bg-yellow-300 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        type="button"
        onClick={handleClick}
      >
        {isModify ? "Modifier" : "Ajouter"}
      </button>
    </div>
  );
};

export default InputComments;
