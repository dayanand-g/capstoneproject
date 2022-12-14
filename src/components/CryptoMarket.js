import React, { Component } from "react";
import { connect } from "react-redux";
import { getMarketData } from "../actions";

class CryptoMarket extends Component {
  componentDidMount() {
    this.props.getMarketData();
  }

  render() {
    return <div>getMarketData</div>;
  }
}

export default connect(null, { getMarketData })(CryptoMarket);
