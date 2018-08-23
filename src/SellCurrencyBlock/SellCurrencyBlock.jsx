import React from 'react';
import PropTypes from 'prop-types';
import CurrencyPrice from '../CurrencyPrice.jsx';
import './SellCurrencyBlock.scss';

const propTypes = {
    currencyName: PropTypes.string.isRequired,
    sellPrice: PropTypes.number.isRequired
};

const SellCurrencyBlock = ({ currencyName, sellPrice }) => (
    <div className="sell-currency-block">
        <div className="sell-currency-block__title">{`Sell ${currencyName}`}</div>
        <CurrencyPrice price={sellPrice} />
    </div>
);

SellCurrencyBlock.propTypes = propTypes;

export default SellCurrencyBlock;
