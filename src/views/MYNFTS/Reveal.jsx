/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/_Reveal.scss'

const Reveal = ({ handleClick, title }) => (
  <div className="reveal__item" onClick={handleClick}>
    <div className="reveal__top">
      <picture>
        {/* <source srcSet="./images/reveal-2x.webp 2x, ./images/reveal.webp 1x" /> */}
        <img className="reveal__image" src="https://tora-assets.oss-cn-hongkong.aliyuncs.com/images/tiger_silhouette.png" alt="reveal" />
      </picture>

      <div className="reveal__question-sign">?</div>
      <div className="reveal__text-hover">Reveal</div>
    </div>
    <div className="item">
      <div className="title"><span>#{title.padStart(5, '0')}</span> | <span className="reveal__question-grey">?</span></div>
    </div>
  </div>
);

Reveal.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
};

Reveal.defaultProps = {
  handleClick: () => {},
  title: '',
};

export default Reveal;
