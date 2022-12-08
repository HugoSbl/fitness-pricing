import React from "react";
import OptionCard from "../../customComponents/CheckBoxCard";

const PriceContainer = ({ priceFirstMonth, priceOtherMonth }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-2/6 m-2 text-center bg-yellow-300 rounded-lg">
        <p className="text-sm mx-2 mt-1">Prix le premier mois</p>
        <p>{priceFirstMonth}</p>
      </div>
      <div className="flex flex-col w-2/6 m-2 text-center bg-yellow-300 rounded-lg">
        <p className="text-sm mx-2 mt-1">Prix les mois suivants</p>
        <p>{priceOtherMonth}</p>
      </div>
    </div>
  );
};

const OptionSelectedContainer = ({ nameOfSelectedOptions }) => {
  return (
    <div className="flex text-start">
      <div className="text-xs">
        *Option(s) sélectionnée(s) :{" "}
        {nameOfSelectedOptions.map((nameOfOption, index) => (
          <React.Fragment key={nameOfOption}>
            {nameOfOption}
            {index < nameOfSelectedOptions.length - 1 && ", "}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const PricingCardOptions = ({
  options,
  clickOptionHandler,
  priceFirstMonth,
  priceOtherMonth,
  nameOfSelectedOptions,
}) => {
  return (
    <div>
      {options.map((option) => (
        <OptionCard
          key={option.name}
          // {...option}
          id={option.id}
          name={option.name}
          price={option.price}
          period={option.period}
          description={option.description}
          clickOptionHandler={clickOptionHandler}
        />
      ))}

      <PriceContainer
        priceFirstMonth={priceFirstMonth}
        priceOtherMonth={priceOtherMonth}
      />

      {nameOfSelectedOptions[0] ? (
        <OptionSelectedContainer
          nameOfSelectedOptions={nameOfSelectedOptions}
        />
      ) : null}
    </div>
  );
};

export default PricingCardOptions;
