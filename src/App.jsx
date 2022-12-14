import React from "react";
import Navbar from "./components/Navigation.jsx";
import PricingCard from "./components/card/pricing-card/PricingCard.jsx";
import Comments from "./components/comments/Comments.jsx";
import pricingCardItems from "./components/card/pricing-card/PricingData";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Navbar />
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
    </div>
  );
}

export default App;
