import React from "react";
import { useState, useContext } from "react";
import Button from "./Button.jsx";
import DefaultInput from "./DefaultInput.jsx";

const ModalContent = ({ showModal, onClose }) => {
  if (!showModal) return;

  const [typeOfInput, setTypeOfInput] = useState(true);

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
          CONNEXION
        </h1>

        <div className="my-2">
          <form className="flex-col">
            <div className="w-full">
              <DefaultInput defaultText="Identifiant" typeOfinput="text" />
            </div>

            <div className="w-full flex items-center">
              <DefaultInput
                defaultText="Mot de passe"
                typeOfInput={typeOfInput ? "password" : "text"}
              />

              <img
                className="h-6 mx-4"
                src="src/assets/eye.png"
                onClick={() => {
                  setTypeOfInput(!typeOfInput);
                }}
              />
            </div>
          </form>
        </div>
        <div className="w-full p-4">
          <Button buttonText="Confirmer" handleClick={() => onClose()}></Button>
        </div>
      </div>
    </div>
  );
};

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        buttonText={"SE CONNECTER"}
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
