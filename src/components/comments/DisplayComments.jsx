import React from "react";
import CommentCard from "../customComponents/CommentCard.jsx";

const DisplayComments = ({ commentArray, deleteComment, modifyComment }) => {
  return (
    <div className="flex flex-row-reverse flex-wrap justify-center">
      {commentArray.map((currentObject) => {
        console.log("currentObject", currentObject);
        return (
          <CommentCard
            key={currentObject.id}
            id={currentObject.id}
            text={currentObject.text}
            date={currentObject.date}
            deleteComment={deleteComment}
            modifyComment={modifyComment}
          />
        );
      })}
    </div>
  );
};

export default DisplayComments;
