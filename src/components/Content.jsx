import React from "react";
import PricingCard from "./card/pricing-card/PricingCard.jsx";
import Comments from "./comments/Comments.jsx";
import pricingCardItems from "./card/pricing-card/PricingData";
import Modal from "./customComponents/Modal.jsx";
import { Toaster } from "react-hot-toast";

const Content = () => {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#fff",
            color: "#363636",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />

      <div className="flex justify-evenly">
        {pricingCardItems.map((cardItem) => (
          <PricingCard key={cardItem.id} {...cardItem} className="w-1/3" />
        ))}
      </div>

      <Comments />
      <Modal />
    </>
  );
};

export default Content;
