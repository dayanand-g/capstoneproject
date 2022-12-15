import React from "react";
import CryptoMarket from "./CryptoMarket";
import Navbar from "./Navbar";
import { PieChart } from "./charts/PieChart";
import Searchbar from "./Searchbar";
import FiatCurrencySelector from "./FiatCurrencySelector";
import ButtonGroup from "./ButtonGroup";
import ExchangeCoins from "./ExchangeCoins";
// import { BarChart } from "./charts/BarChart";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-cyan-700 p-4">
        <div className="search flex">
          <FiatCurrencySelector />
          <Searchbar />
        </div>
        <ButtonGroup />
        {/* <BarChart/> */}
        <CryptoMarket />
        <div className="flex">
          <PieChart />
          <div className="excoins">
            <ExchangeCoins/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
