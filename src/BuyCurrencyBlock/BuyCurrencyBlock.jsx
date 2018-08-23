import React from 'react';
import PropTypes from 'prop-types';
import CurrencyPrice from '../CurrencyPrice/CurrencyPrice.jsx';
import './BuyCurrencyBlock.scss';

const propTypes = {
    currencyName: PropTypes.string.isRequired,
    buyPrice: PropTypes.number.isRequired
};

const BuyCurrencyBlock = ({ currencyName, buyPrice }) => (
    <div className="buy-currency-block">
        <div className="buy-currency-block__title">{`Buy ${currencyName}`}</div>
        <CurrencyPrice price={buyPrice} />
    </div>
);

BuyCurrencyBlock.propTypes = propTypes;

export default BuyCurrencyBlock;
