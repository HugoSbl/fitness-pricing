import { React, useState } from "react";
import InputComments from "./InputsComments.jsx";
import DisplayComments from "./DisplayComments.jsx";

const Comments = () => {
  const [inputValue, setInputValue] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [isModify, setIsModify] = useState(false);
  const [commentId, setCommentId] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addComment = () => {
    //probleme du 0 à régler pour 21:4 à la place de 21:04 par ex
    const now = new Date();
    const commentDate = now.getHours() + ":" + now.getMinutes();
    const commentListLength = commentList.length;

    setCommentList((currState) => [
      ...currState,
      { id: commentListLength + 1, date: commentDate, text: inputValue },
    ]);
    setInputValue("");
  };

  const deleteComment = (id) => {
    setCommentList(
      commentList.filter((commentListItem) => commentListItem.id !== id)
    );
  };

  const modifyComment = (id) => {
    const commentToModify = commentList.find(
      (commentListItem) => commentListItem.id === id
    );
    setCommentId(commentToModify.id);
    console.log("commentList", commentList);
    setInputValue(commentToModify.text);
    setIsModify(true);
  };

  //FONCTION A ETUDIER /!\
  //ici
  //oublies pas
  const textCommentModifier = () => {
    setCommentList((currState) =>
      currState.map((item) =>
        item.id === commentId
          ? { id: item.id, text: inputValue, date: item.date }
          : item
      )
    );
    setInputValue("");
    setIsModify(false);
  };

  return (
    <div>
      <div className="flex justify-center pt-6 my-4">
        <div className=" w-1/3">
          <InputComments
            value={inputValue}
            addComment={addComment}
            handleInputChange={handleInputChange}
            isModify={isModify}
            textCommentModifier={textCommentModifier}
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
