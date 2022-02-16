import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import BuyMoreBtn from "../BuyMoreBtn";
import useBuy from "../../hooks/useBuy";
import { Radio as AntdRadio } from "antd";
import { NEAR } from 'near-units';

const Radio = ({ value, price }) => (
  <AntdRadio value={value}>
    {parseFloat(
      price.oneNFT.mul(NEAR.from(value)).toHuman()
    ).toFixed(1)}
  </AntdRadio>
)

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

  // update CSS variable with correct `app.manyCount`
  React.useEffect(() => {
    document.querySelector(':root')
      .style.setProperty('--many-count', `"${app.manyCount}"`);
  }, [app.manyCount])

  return (
    <li className={className}>
      <BuyMoreBtn onClick={handleClick} text={text} />
      {isLinkDrop && <span>Share a mystery NFT for your friend</span>}
      <AntdRadio.Group value={num} onChange={(e) => numChange(e)}>
        <Radio value={1} price={price} />
        {!isLinkDrop && moreThenManyCount && (
          <Radio value={app.manyCount} price={price} />
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
