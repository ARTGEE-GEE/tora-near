import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import BuyMoreBtn from '../BuyMoreBtn';
import useBuy from '../../hooks/useBuy';
import { Radio } from 'antd'


const BuyMore = ({ isLinkDrop, className }) => {
  const [ num, setNum] = useState(1)
  const numChange = e => {
    console.log(e.target.value, '-0-')
    handleNumberClick(e.target.value)
    setNum(e.target.value)
  }
  const {
    text,
    state,
    handleClick,
    handleNumberClick,
    formatPrice
  } = useBuy(isLinkDrop);

  const { price, app } = state;
  const moreThenManyCount = app.tokensLeft >= app.manyCount;
  console.log('abc')
  return (
    <li className={className}>
      <BuyMoreBtn onClick={handleClick} text={text}/>
      {
        isLinkDrop && <>
          <span>Share a mystery NFT for your friend</span>
        </>
      }
      <Radio.Group value={num} onChange={e => numChange(e)}>
        <Radio value={1}>{formatPrice(price.oneNFT)}</Radio>
        {!isLinkDrop && moreThenManyCount && <Radio value={3}>{formatPrice(price.manyNFTS)}</Radio>}
      </Radio.Group>
    </li>
  )
  
}

BuyMore.propTypes = {
  isLinkDrop: PropTypes.bool,
};

BuyMore.defaultProps = {
  isLinkDrop: false,
};
export default memo(BuyMore)