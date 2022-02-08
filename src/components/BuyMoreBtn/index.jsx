import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react'

const BuyMoreBtn = ({ className, text, onClick }) => {
  return <button
    type="button"
    className={`buy-more-btn ${className || ''}`}
    onClick={onClick}
  >
    {text}
  </button>
}

BuyMoreBtn.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

BuyMoreBtn.defaultProps = {
  onClick: () => {},
};
export default BuyMoreBtn