import { useContext } from 'react'
import PropTypes from 'prop-types';
import { appStore } from '../../state/app';
import { useLocation } from 'react-router-dom';
import BuyMoreBtn from '../BuyMoreBtn';
import BuyMore from '../BuyMore';
import GenerateSoldOut from './GenerateSoldOut';
const GenerateBlock = () => {
  const { pathname } = useLocation();
  const { state } = useContext(appStore);
  const { soldOut } = state.app;
  return(
    <div className="generate">
      {
        soldOut && <>
          <h2>You don't have a <span>{pathname === '/link-drop' ? 'LinkDrops' : 'NFT'}</span> yet</h2>
          <div className='btn-buy-more'>Click “<span>{pathname === '/link-drop' ? 'Generate gift Links' : 'Buy more'}</span>” to buy</div>
        </>
      }
      <GenerateBtn soldOut={soldOut} /> 
  </div>
  )
}

export const GenerateBtn = ({soldOut}) => {
  const { update } = useContext(appStore);
  const modalOpen = () => update('app.modalOpen', true);
  console.log(soldOut, 'soldOut')
  return (
    <>{
      !soldOut ? (
        <ul className="generate-btn w">
        <BuyMore className="join"/>
        <BuyMore className="gift-links" isLinkDrop={true} />
        <li className="send-NFT"><BuyMoreBtn onClick={modalOpen} text="Send NFT">Send NFT</BuyMoreBtn></li>
      </ul>
      ):(
        <GenerateSoldOut />
      )

    }
    </>
  )
}

GenerateBtn.propTypes = {
  soldOut: PropTypes.bool,
};

GenerateBtn.defaultProps = {
  soldOut: false,
};
export default GenerateBlock