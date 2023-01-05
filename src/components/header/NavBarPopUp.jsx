import React, { useState } from "react";

const NavBarPopUp = () => {
  const [handlePopUp, setHandlePopUp] = useState(true);
  const frenchMonth = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const actualFrenchMonth = frenchMonth[new Date().getMonth()];

  return (
    <>
      <div
        className={`w-full bg-yellow-300 flex items-center justify-between transition-all duration-300 overflow-auto ${
          handlePopUp ? "h-10" : "h-0 "
        }
      `}
      >
        <div className="w-1/3"></div>
        <div className={"w-1/3 flex justify-center"}>
          <img className="mx-4" src={"src/assets/angry-emoticone.png"} />

          <p>En {actualFrenchMonth}, frais d&apos;adhésions offerts</p>
        </div>
        <div className="w-1/3 flex flex-row-reverse justify-items ">
          <img
            className="h-6 mx-8"
            onClick={() => setHandlePopUp(false)}
            src="src/assets/close.png"
          />
        </div>
      </div>
    </>
  );
};
export default NavBarPopUp;
