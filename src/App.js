import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SellCurrencyBlock from "./SellCurrencyBlock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SellCurrencyBlock currencyName={"USD"} sellPrice={12.3456789} />
      </div>
    );
  }
}

export default App;
