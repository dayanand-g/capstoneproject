import React from "react";
import CryptoMarket from "./CryptoMarket";
import Navbar from "./Navbar";
import { PieChart } from "./charts/PieChart";
import Searchbar from "./Searchbar";
import FiatCurrencySelector from "./FiatCurrencySelector";
import ButtonGroup from "./ButtonGroup";
import ExchangeCoins from "./ExchangeCoins";
import { BarChart } from "./charts/BarChart";
import ChartTypeSelect from "./ChartTypeSelect";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main flex bg-cyan-700">
        <div className="p-4">
          <div className="search flex">
            <FiatCurrencySelector />
            <Searchbar />
          </div>
          <div className="pt-2">
            <ButtonGroup />
            <ChartTypeSelect/>
          </div>
          <div className="pt-2">
          <BarChart/>
          </div>

          <div className="flex pt-2">
            <PieChart />
            <div className="excoins pl-4">
              <ExchangeCoins />
            </div>
          </div>
        </div>
        <div className="bg-slate-500 p-4">
          <CryptoMarket />
        </div>
      </div>
    </div>
  );
};

export default App;
