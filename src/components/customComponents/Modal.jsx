import React from "react";
import { useState, useContext } from "react";
import Button from "./Button.jsx";

const ModalContent = ({ showModal, onClose }) => {
  if (!showModal) return;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-all duration-700 
      ${showModal ? "bg-black/[.50]" : "bg-transparent"}`}
      onClick={() => onClose()}
    >
      <div
        className={`fixed w-[400px] rounded-lg overflow-auto bg-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out
         ${showModal ? "translate-y-0" : "translate-y-300px"}`}
        onClick={(event) => event.stopPropagation()}
      >
        <h1 className="py-4 w-full bg-slate-600 text-blue-50 font-extrabold text-center">
          Inscription
        </h1>
        <div>
          <div>modal content</div>
        </div>
        <Button buttonText={"Confirmer"} handleClick={() => onClose()}></Button>
      </div>
    </div>
  );
};

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        buttonText={"s'inscrire"}
        handleClick={() => setShowModal(true)}
      ></Button>
      <ModalContent
        setShowModal={setShowModal}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Modal;
