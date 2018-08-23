import React from 'react';
import PropTypes from 'prop-types';
import SellCurrencyBlock from "../SellCurrencyBlock";
import BuyCurrencyBlock from "../BuyCurrencyBlock";
import "./CurrencyPairBlock.scss";

const propTypes = {
    firstCurrencyName: PropTypes.string.isRequired,
    secondCurrencyName: PropTypes.string.isRequired,
    sellPrice: PropTypes.number.isRequired,
    buyPrice: PropTypes.number.isRequired
};

const CurrencyPairBlock = ({ firstCurrencyName, secondCurrencyName, sellPrice, buyPrice }) => (
    <div className="currency-pair-block">
        <div className="currency-pair-block__title">
            {`${firstCurrencyName} ${secondCurrencyName}`}
        </div>
        <div className="currency-pair-block__content">
            <SellCurrencyBlock currencyName={firstCurrencyName} sellPrice={sellPrice} />
            <BuyCurrencyBlock currencyName={firstCurrencyName} buyPrice={buyPrice} />
        </div>
    </div>
);

CurrencyPairBlock.propTypes = propTypes;

export default CurrencyPairBlock;
