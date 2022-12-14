import coingeckoMarkets from "../apis/coingeckoMarkets";

export const getMarketData = () => async (dispatch) => {
  const response = await coingeckoMarkets.get(
    "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10"
  );

  dispatch({ type: "GET_MARKET_DATA", payload: response });
};
