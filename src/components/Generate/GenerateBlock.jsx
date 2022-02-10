import { useContext } from 'react'
import { appStore } from '../../state/app';
import { useLocation } from 'react-router-dom';
import BuyMoreBtn from '../BuyMoreBtn';
import BuyMore from '../BuyMore';

const GenerateBlock = () => {
  const { pathname } = useLocation();
  return(
    <div className="generate">
      <h2>You don't have a <span>{pathname === '/link-drop' ? 'LinkDrops' : 'NFT'}</span> yet</h2>
      <div className='btn-buy-more'>Click “<span>{pathname === '/link-drop' ? 'Generate gift Links' : 'Buy more'}</span>” to buy</div>
      <GenerateBtn /> 
  </div>
  )
}

export const GenerateBtn = () => {
  const { update } = useContext(appStore);
  const modalOpen = () => update('app.modalOpen', true);
  return (
    <ul className="generate-btn w">
        <BuyMore className="join"/>
        <BuyMore className="gift-links" isLinkDrop={true} />
        <li className="send-NFT"><BuyMoreBtn onClick={modalOpen} text="Send NFT">Send NFT</BuyMoreBtn></li>
      </ul>
  )
}

export default GenerateBlock