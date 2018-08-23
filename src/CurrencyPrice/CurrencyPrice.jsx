import React from 'react';
import PropTypes from 'prop-types';
import "./CurrencyPrice.scss";

const propTypes = {
    price: PropTypes.number.isRequired
};

const countDigitsBeforeDecimalPoint = number => (Math.max(Math.floor(Math.log10(number)), 0) + 1);
const VISIBLE_NUMBER_OF_DIGITS = 6;

const CurrencyPrice = ({ price }) => {
    const numberOfFractionDigitsToDisplay = VISIBLE_NUMBER_OF_DIGITS - countDigitsBeforeDecimalPoint(price);
    const priceWithFixedNumberOfDigits = price.toFixed(numberOfFractionDigitsToDisplay);
    const priceString = String(priceWithFixedNumberOfDigits);

    return (
        <div className="currency-price">
            <div className="currency-price__first-part">{priceString.substr(0, 4)}</div>
            <div className="currency-price__second-part">{priceString.substr(4, 2)}</div>
            <div className="currency-price__third-part">{priceString.substr(6, 1)}</div>
        </div>
    );
};

CurrencyPrice.propTypes = propTypes;

export default CurrencyPrice;
