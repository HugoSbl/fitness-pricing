import React from "react";

const InputComments = ({
  value,
  addComment,
  handleInputChange,
  isModify,
  textCommentModifier,
}) => {
  return (
    <div className="bg-slate-600 p-2 rounded-lg ">
      <div className="py-2 bg-slate-600 text-blue-50 font-extrabold text-center">
        COMMENTAIRES
      </div>
      <textarea
        className="
        block
        w-5/6
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        transition
        ease-in-out
        m-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        id="commentInput"
        rows="3"
        value={value}
        placeholder="Votre message"
        onChange={handleInputChange}
      ></textarea>

      <button
        className="inline-block w-full px-6 py-2.5  bg-yellow-300 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        type="button"
        onClick={isModify ? textCommentModifier : addComment}
      >
        {isModify ? "Modifier" : "Ajouter"}
      </button>
    </div>
  );
};

export default InputComments;
