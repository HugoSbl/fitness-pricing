import React from "react";

const InputComments = ({ addComment, handleInputChange }) => {
  return (
    <div>
      <div>Commentaires</div>
      <textarea
        className="
        block
        w-full
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
        placeholder="Your message"
        onChange={handleInputChange}
      ></textarea>
      <button
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        type="button"
        onClick={addComment}
      >
        Ajouter
      </button>
    </div>
  );
};

export default InputComments;
