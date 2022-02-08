import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
const ConnectWalletBtn = (props) => {
  const { text, handleClick, logOut } = props
  return (
    <Tooltip placement="right" title={ logOut ? "Log out" : ''}>
      <button className={`connect-btn${logOut ? " log-out" : ""}`} onClick={ handleClick }><div>{ text }</div><img src="https://tora-assets.oss-cn-hongkong.aliyuncs.com/images/button/button@2x.png" alt="" /></button>
    </Tooltip>
  )
}


ConnectWalletBtn.propTypes = {
  text: PropTypes.string,
  logOut: PropTypes.bool,
};

ConnectWalletBtn.defaultProps = {
  text: 'Connect Wallet',
  logOut: false,
};

export default ConnectWalletBtn