import { React } from "react";
import Button from "../customComponents/Button.jsx";

const InputComments = ({
  value,
  handleInputChange,
  isModify,
  handleClick,
  isDeployed,
  setIsDeployed,
}) => {
  return (
    <div className="bg-slate-600 p-4 rounded-lg ">
      <div className="py-2 bg-slate-600 text-blue-50 font-extrabold text-center ">
        COMMENTAIRES
      </div>
      <textarea
        className={`text-gray-700 bg-white bg-clip-padding border border-solid 
                border-gray-300 rounded-lg ease-in-out my-4 transition-all delay-75
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                block w-full px-3 py-1.5 text-base font-normal 
                ${isDeployed ? "h-[120px]" : "h-[50px]"}`}
        id="commentInput"
        rows="2"
        value={value}
        placeholder="Votre message"
        onChange={handleInputChange}
        onClick={() => setIsDeployed(true)}
        onBlur={() => setIsDeployed(false)}
      ></textarea>

      <Button
        buttonText={isModify ? "Modifier" : "Ajouter"}
        handleClick={handleClick}
      ></Button>
    </div>
  );
};

export default InputComments;
