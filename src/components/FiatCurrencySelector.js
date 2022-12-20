import React from "react";

const FiatCurrencySelector = () => {
  return <div>
    <select className="max-w-md mx-auto px-4 py-2 rounded-lg border-2 border-black">
        <option>INR</option>
        <option>USD</option>
    </select>
  </div>;
};

export default FiatCurrencySelector;
