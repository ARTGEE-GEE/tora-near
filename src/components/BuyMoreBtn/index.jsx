import React from "react";
import PropTypes from "prop-types";
import { appStore } from "../../state/app";
import { useContext, useState } from "react";

const BuyMoreBtn = ({ className, text, onClick }) => {
  const { state } = useContext(appStore);
  const { app } = state;
  const [dis, setDis] = useState("none");

  const isBuy = () => {
    if (text === "Buy more" || text === "Generate gift links") {
      if (app.misfitsArray.length + app.linkDropArray.length < 4) {
        onClick();
      } else {
        setDis("flex");
      }
    } else {
      onClick();
    }
  };
  return (
    <>
      <button
        type="button"
        className={`buy-more-btn ${className || ""}`}
        onClick={isBuy}
      >
        <span>{text}</span>
      </button>
      <div className={`isBuy`} style={{ display: dis }}>
        <div className="isBuy-box">
          <h4>Notice</h4>
          <p>You have exceeded your purchase limit!</p>
          <button onClick={() => setDis("none")}>OK</button>
        </div>
      </div>
    </>
  );
};

BuyMoreBtn.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

BuyMoreBtn.defaultProps = {
  onClick: () => {},
};
export default BuyMoreBtn;
