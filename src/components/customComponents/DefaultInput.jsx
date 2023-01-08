import React from "react";

const DefaultInput = ({ defaultText, typeOfInput }) => {
  return (
    <>
      <input
        type={typeOfInput}
        className="text-gray-700 bg-white bg-clip-padding border border-solid
                border-gray-300 rounded-lg ease-in-out my-4 transition-all delay-75
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                block w-full px-3 py-1 text-base font-normal"
        id="commentInput"
        placeholder={defaultText}
      ></input>
    </>
  );
};

export default DefaultInput;
