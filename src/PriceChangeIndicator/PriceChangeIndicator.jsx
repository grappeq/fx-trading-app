import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";
import "./PriceChangeIndicator.scss";

const propTypes = {
    hasPriceFallen: PropTypes.bool
};

const defaultProps = {
    hasPriceFallen: false
};

const PriceChangeIndicator = ({ hasPriceFallen }) => (
    <div className={cn("price-change-indicator", { "price-change-indicator--has-fallen": hasPriceFallen })} />
);

PriceChangeIndicator.propTypes = propTypes;
PriceChangeIndicator.defaultProps = defaultProps;

export default PriceChangeIndicator;
