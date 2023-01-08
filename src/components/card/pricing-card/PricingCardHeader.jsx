import React from "react";

const PricingCardHeader = ({ header }) => {
  return (
    <div className="">
      {header && (
        <>
          <h1 className="py-4 bg-slate-600 w-full text-blue-50 font-extrabold text-center">
            {header.title}
          </h1>
          <h2 className="py-2 w-full bg-yellow-300 text-center text-sm font-bold">
            {header.subtitle}
          </h2>
        </>
      )}
    </div>
  );
};

export default PricingCardHeader;
