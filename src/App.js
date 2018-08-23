import React, {Component} from 'react';
import './App.scss';
import CurrencyPairBlock from "./CurrencyPairBlock/CurrencyPairBlock";

class App extends Component {
    render() {
        return (
            <div className="currency-pair-blocks-list">
                <CurrencyPairBlock
                    secondCurrencyName={"PLN"}
                    buyPrice={0.9941323}
                    sellPrice={0.9921323}
                    firstCurrencyName={"USD"}
                />
                <CurrencyPairBlock
                    secondCurrencyName={"PLN"}
                    buyPrice={0.9941323}
                    sellPrice={0.9921323}
                    firstCurrencyName={"USD"}
                />
            </div>
        );
    }
}

export default App;
