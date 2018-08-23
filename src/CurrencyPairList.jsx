import React, {Component} from 'react';
import PropTypes from "prop-types";
import CurrencyPairBlock from "./CurrencyPairBlock/CurrencyPairBlock";

const propTypes = {
    datasource: PropTypes.arrayOf(PropTypes.shape({
        pair: PropTypes.string.isRequired,
        buy: PropTypes.number.isRequired,
        sell: PropTypes.number.isRequired
    })).isRequired
};

class CurrencyPairList extends Component {
    constructor(props) {
        super(props);

        this.previousBuyPrices = new Map();
        this.props.datasource.forEach(({ pair, buy }) => {
            this.previousBuyPrices.set(pair, buy);
        });
    }

    componentDidUpdate() {
        this.props.datasource.forEach(({ pair, buy }) => {
            if (this.previousBuyPrices.get(pair) !== buy) {
                this.previousBuyPrices.set(pair, buy);
            }
        });
    }

    render() {
        return (
            <div className="currency-pair-blocks-list">
                {this.props.datasource.map(({ pair, buy: buyPrice, sell: sellPrice }) => {
                    const [firstCurrencyName, secondCurrencyName] = pair.split(' ');
                    const previousBuyPrice = this.previousBuyPrices.get(pair);
                    const hasPriceFallen = previousBuyPrice !== undefined && buyPrice < previousBuyPrice;
                    return (
                        <CurrencyPairBlock
                            {...{
                                firstCurrencyName, secondCurrencyName, buyPrice, sellPrice, key: pair, hasPriceFallen
                            }}
                        />
                    );
                })}
            </div>
        );
    }
}

CurrencyPairList.propTypes = propTypes;

export default CurrencyPairList;
