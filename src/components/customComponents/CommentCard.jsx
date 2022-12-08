import React from "react";

const CommentCard = ({ id, text, date, deleteComment, modifyComment }) => {
  console.log("test comment card, ", id, text, date);
  return (
    <div id={id} className="bg-yellow-300 rounded-lg  w-64 m-1">
      <div className="p-2">
        <div className="flex justify-between">
          <span className="text-xs">{date}</span>
          <div className="flex flex-row">
            <img
              onClick={() => modifyComment(id)}
              src="src/assets/editing.png"
              className="h-5 mr-1"
            ></img>
            <img
              onClick={() => deleteComment(id)}
              src="src/assets/close.png"
              className="h-5"
            ></img>
          </div>
        </div>
        <div>
          <p className="break-words">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
