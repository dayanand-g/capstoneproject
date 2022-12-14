import React from "react";
import CryptoMarket from "./CryptoMarket";
import Navbar from "./Navbar";
import { PieChart } from "./charts/PieChart";
import Searchbar from "./Searchbar";
import FiatCurrencySelector from "./FiatCurrencySelector";

const App = () => {
  return (
    <div>
      <Navbar />
      <FiatCurrencySelector/>
      <Searchbar/>
      <CryptoMarket />
      <PieChart/>
    </div>
  );
};

export default App;
