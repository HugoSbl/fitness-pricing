import { React, useState, useEffect } from "react";
import InputComments from "./InputsComments.jsx";
import DisplayComments from "./DisplayComments.jsx";
import toast, { Toaster } from "react-hot-toast";

const Comments = () => {
  const [inputValue, setInputValue] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [isModify, setIsModify] = useState(false);
  const [commentId, setCommentId] = useState(0);
  const [isDeployed, setIsDeployed] = useState(true);

  useEffect(() => {
    if (inputValue.length > 0) {
      setIsDeployed(true);
    } else {
      setIsDeployed(false);
    }
  }, [inputValue]);

  const handleClickOnInputButton = () => {
    if (isModify) {
      toast.success("Le commentaire a été modifié");
      textCommentModifier();
    } else {
      toast.success("Le commentaire a été ajouté");
      addComment();
    }
  };

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
    /*  setIsDeployed(true); */
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
            handleClick={handleClickOnInputButton}
            setIsDeployed={setIsDeployed}
            isDeployed={isDeployed}
          />
        </div>
      </div>
      <div>
        <DisplayComments
          commentList={commentList}
          deleteComment={deleteComment}
          modifyComment={modifyComment}
          setIsDeployed={setIsDeployed}
        />
      </div>
    </div>
  );
};

export default Comments;
