import React from "react";

const OptionCardHeader = ({ id, name, price, period, clickOptionHandler }) => {
  return (
    <div className="m-1 flex flex-row justify-between items-center">
      <input
        id={id}
        className="ml-2"
        type="checkbox"
        onChange={clickOptionHandler}
      ></input>
      <div className="font-extrabold">{name}</div>
      <div className="flex flex-col ">
        <div className="font-semibold text-center">{price}€</div>
        <div className="font-light text-xs -mt-2">{period}</div>
      </div>
    </div>
  );
};

const OptionCard = ({
  id,
  name,
  price,
  period,
  description,
  clickOptionHandler,
}) => {
  return (
    <div className="flex justify-center select-none">
      <div className="w-11/12 my-2 bg-yellow-300 rounded-lg hover:scale-105 ease-in duration-75">
        <label className={name}>
          <OptionCardHeader
            id={id}
            name={name}
            price={price}
            period={period}
            clickOptionHandler={clickOptionHandler}
          />
          <div>
            <p className="m-2 font-light text-xs">{description}</p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default OptionCard;
