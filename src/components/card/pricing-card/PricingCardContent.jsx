import React from "react";
import Accordion from "../../customComponents/Accordion";

const OptionSection = ({ condition }) => {
  return (
    /* demander à flo pourquoi items-center plutot que align-middle */
    <div className="flex mx-4 my-2 items-center">
      <img src="src/assets/checked.png" className="h-6"></img>
      <p className="font-bold mx-1 px-1">{condition.value}</p>
      <p className="text-sm">{condition.description}</p>
    </div>
  );
};

/* demander à flo si c'est parce que j'ai appelé ma props pricing qu'il rentre directement dans pricing dans la bdd */
const PricingSection = ({ pricing }) => {
  return (
    <div className="my-4">
      <div className="flex justify-center gap-1">
        <p className="text-5xl font-extrabold">{pricing.bigPrice}</p>
        <div className="flex-row ">
          <p>{pricing.smallPrice}</p>
          <p>{pricing.priceDescription}</p>
        </div>
      </div>
      <p className="flex justify-center">{pricing.priceCondition}</p>
    </div>
  );
};

/* optimisation de ce code pour  */
const AvantagesList = ({ avantages }) => {
  return (
    <ul className="list-disc">
      {avantages.map((data) => (
        <li
          className="font-extralight text-sm my-2 mx-1"
          key={data.description}
        >
          {data.description}
        </li>
      ))}
    </ul>
  );
};

const PricingCardContent = ({ content }) => {
  return (
    <div className="">
      <PricingSection {...content} />
      <div className="flex-col align-center">
        {content.condition.map((condition) => (
          <OptionSection condition={condition} key={condition.value} />
        ))}
      </div>
      <Accordion title="title">
        <AvantagesList {...content} />
      </Accordion>
    </div>
  );
};

export default PricingCardContent;
