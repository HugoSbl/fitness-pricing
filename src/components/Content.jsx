import React from "react";
import PricingCard from "./card/pricing-card/PricingCard.jsx";
import Comments from "./comments/Comments.jsx";
import pricingCardItems from "./card/pricing-card/PricingData";
import Modal from "./customComponents/Modal.jsx";
import Toaster from "./customComponents/Toaster.jsx";

const Content = () => {
  return (
    <>
      <div className="flex justify-evenly">
        {pricingCardItems.map((cardItem) => (
          <PricingCard key={cardItem.id} {...cardItem} className="w-1/3" />
        ))}
      </div>
      ;
      <Comments />
      <Toaster />
    </>
  );
};

export default Content;