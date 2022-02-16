import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import BuyMoreBtn from "../BuyMoreBtn";
import useBuy from "../../hooks/useBuy";
import { Radio as AntdRadio } from "antd";
import { NEAR } from 'near-units';



const BuyMore = ({ isLinkDrop, className }) => {
  const [num, setNum] = useState(1);
  const numChange = (e) => {
    handleNumberClick(e.target.value);
    setNum(e.target.value);
  };
  const { text, state, handleClick, handleNumberClick } =
    useBuy(isLinkDrop);

  const { price, app } = state;
  const moreThenManyCount = app.tokensLeft >= app.manyCount;
  const Radio = ({ value }) => (
    <AntdRadio value={value}>
      {parseFloat(
        price.oneNFT.mul(NEAR.from(value)).toHuman()
      ).toFixed(1)}
    </AntdRadio>
  )
  return (
    <li className={className}>
      <BuyMoreBtn onClick={handleClick} text={text} />
      {isLinkDrop && <span>Share a mystery NFT for your friend</span>}
      <AntdRadio.Group value={num} onChange={(e) => numChange(e)}>
        <Radio value={1}/>
        {!isLinkDrop && moreThenManyCount && (
          <Radio value={app.manyCount}/>
        )}
      </AntdRadio.Group>
    </li>
  );
};

BuyMore.propTypes = {
  isLinkDrop: PropTypes.bool,
};

BuyMore.defaultProps = {
  isLinkDrop: false,
};
export default memo(BuyMore);
