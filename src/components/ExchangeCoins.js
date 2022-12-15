import React from "react";

const ExchangeCoins = () => {
  return (
    <div className="bg-white px-4 rounded-lg py-4">
      <span className="font-bold">Exchange Coins</span>
      <div className="flex">
        <span className="font-semibold text-orange-500">Sell</span>
        <select className="max-w-md mx-2 p-2 rounded-lg border-2 border-black font-semibold">
          <option>Bitcoin</option>
          <option>Ethereum</option>
        </select>
        <input type="text" placeholder="Enter Value" className="border-2 border-black rounded-lg"/>
      </div>

      <div className="flex">
        <span className="font-semibold text-green-600">Buy</span>
        <select className="max-w-md mx-2 p-2 rounded-lg border-2 border-black font-semibold">
          <option>Bitcoin</option>
          <option>Ethereum</option>
        </select>
        <span className="font-semibold">Output</span>
      </div>

      <button className="bg-blue-600 py-2 px-6 text-white font-semibold rounded-lg">Exchange</button>
    </div>
  );
};

export default ExchangeCoins;
