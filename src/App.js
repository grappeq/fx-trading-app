import React, {Component} from 'react';
import './App.scss';
import CurrencyPairList from "./CurrencyPairList";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datasource: [
                { pair: "USD CHF", buy: 0.99143, sell: 0.99043 },
                { pair: "GBP USD", buy: 1.28495, sell: 1.2836 },
                { pair: "GBP CHF", buy: 1.27378, sell: 1.27147 },
                { pair: "EUR SEK", buy: 9.632, sell: 9.6055 },
                { pair: "USD JPY", buy: 110.467, sell: 110.417 },
                { pair: "EUR JPY", buy: 120.589, sell: 120.491 }
            ]
        };

        setInterval(this.randomlyChangePrices.bind(this), 1000);
    }

    randomlyChangePrices() {
        const newDatasource = this.state.datasource.map(({ buy, sell, ...rest }) => ({
            buy: buy * (1 + (Math.random() - 0.5)/5),
            sell: sell * (1 + (Math.random() - 0.5)/5),
            ...rest
        }));
        this.setState({ datasource: newDatasource });
    }

    render() {
        const { datasource } = this.state;
        return (
            <CurrencyPairList {...{ datasource }} />
        );
    }
}

export default App;
