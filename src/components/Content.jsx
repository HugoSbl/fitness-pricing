import React from "react";
import PricingCard from "./card/pricing-card/PricingCard.jsx";
import Comments from "./comments/Comments.jsx";
import pricingCardItems from "./card/pricing-card/PricingData";
import Toaster from "./customComponents/Toaster.jsx";

const Content = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-evenly max-w-screen-2xl">
          {pricingCardItems.map((cardItem) => (
            <PricingCard key={cardItem.id} {...cardItem} />
          ))}
        </div>
      </div>

      <Comments />
      <Toaster />
    </>
  );
};

export default Content;
