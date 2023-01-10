import React from "react";

const PricingCardHeader = ({ header }) => {
  return (
    <div className="">
      {header && (
        <>
          <div className="bg-slate-600 w-full">
            <h1 className="py-4 text-blue-50 font-extrabold text-center">
              {header.title}
            </h1>
          </div>
          <div className="bg-yellow-300 border-x-2 border-slate-600 w-full">
            <h2 className="py-2 text-center text-sm font-bold">
              {header.subtitle}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default PricingCardHeader;
