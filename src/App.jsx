import React from "react";
import Navbar from "./components/Navigation.jsx";
import PricingCard from "./components/card/pricing-card/PricingCard.jsx";
import Comments from "./components/comments/Comments.jsx";
import pricingCardItems from "./components/card/pricing-card/PricingData";

function App() {
  return (
    <div>
      <Navbar />
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
