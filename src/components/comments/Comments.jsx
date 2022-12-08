import { React, useState } from "react";
import InputComments from "./InputsComments.jsx";
import DisplayComments from "./DisplayComments.jsx";

const Comments = () => {
  const [commentText, setCommentText] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  const addComment = () => {
    //probleme du 0 à régler pour 21:4 à la place de 21:04 par ex
    const now = new Date();
    const commentDate = now.getHours() + ":" + now.getMinutes();
    const commentArrayLength = commentArray.length;

    setCommentArray((currState) => [
      ...currState,
      { id: commentArrayLength + 1, date: commentDate, text: commentText },
    ]);
  };
  console.log("commentArray : ", commentArray);

  const deleteComment = (id) => {
    console.log(id);
  };

  const modifyComment = (id) => {
    console.log("🚀 ~ modifyComment ~ id", id);
  };

  return (
    <div>
      <div className="flex justify-center pt-6">
        <div className=" w-1/3">
          <InputComments
            addComment={addComment}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
      <div>
        <DisplayComments
          commentArray={commentArray}
          deleteComment={deleteComment}
          modifyComment={modifyComment}
        />
      </div>
    </div>
  );
};

export default Comments;
