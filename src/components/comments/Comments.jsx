import { React, useState } from "react";
import InputComments from "./InputsComments.jsx";
import DisplayComments from "./DisplayComments.jsx";

const Comments = () => {
  const [commentText, setCommentText] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [arrayToModify, setArrayToModify] = useState(() => {});

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  const addComment = () => {
    //probleme du 0 à régler pour 21:4 à la place de 21:04 par ex
    const now = new Date();
    const commentDate = now.getHours() + ":" + now.getMinutes();
    const commentListLength = commentList.length;

    setCommentList((currState) => [
      ...currState,
      { id: commentListLength + 1, date: commentDate, text: commentText },
    ]);
  };

  const deleteComment = (id) => {
    setCommentList(
      commentList.filter((commentListItem) => commentListItem.id !== id)
    );
  };

  const modifyComment = (id) => {
    setArrayToModify(
      commentList.find((commentListItem) => commentListItem.id == id)
    );
  };

  return (
    <div>
      <div className="flex justify-center pt-6">
        <div className=" w-1/3">
          <InputComments
            addComment={addComment}
            handleInputChange={handleInputChange}
            arrayToModify={arrayToModify}
          />
        </div>
      </div>
      <div>
        <DisplayComments
          commentList={commentList}
          deleteComment={deleteComment}
          modifyComment={modifyComment}
        />
      </div>
    </div>
  );
};

export default Comments;
