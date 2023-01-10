import React, { useState } from "react";
import PricingCardContent from "./PricingCardContent";
import PricingCardHeader from "./PricingCardHeader";
import PricingCardOptions from "./PricingCardDetails";

const PricingCard = ({ header, content, options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleClickOption = (event) => {
    const eventId = event.target.id;
    const isChecked = event.target.checked;
    setSelectedOptions((prevState) =>
      isChecked
        ? [...prevState, eventId]
        : prevState.filter((item) => item !== eventId)
    );
  };

  // 1. options:  [{ id: 'option-1', title: '', price: '', ... }, {...}]
  // 2. state: ['option-1', '', ...]

  const priceFirstMonth = parseFloat(
    options
      .filter((optionItem) =>
        selectedOptions.some((selectedItem) => optionItem.id === selectedItem)
      )
      .reduce((acc, currentOption) => acc + currentOption.price, 19.99)
      .toFixed(2)
  );
  const priceOtherMonth = parseFloat((priceFirstMonth + 10).toFixed(2));

  const nameOfSelectedOptions = options
    .filter((optionItem) =>
      selectedOptions.some((selectedItem) => {
        if (optionItem.id === selectedItem) {
          return optionItem.name;
        }
      })
    )
    .map((optionItem) => optionItem.name);

  return (
    <div className="w-80 m-4 rounded-lg overflow-hidden ">
      <PricingCardHeader header={header} />
      <PricingCardContent content={content} />
      <PricingCardOptions
        options={options}
        clickOptionHandler={handleClickOption}
        priceFirstMonth={priceFirstMonth}
        priceOtherMonth={priceOtherMonth}
        nameOfSelectedOptions={nameOfSelectedOptions}
      />
    </div>
  );
};

export default PricingCard;
