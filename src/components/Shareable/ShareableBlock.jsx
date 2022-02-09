import { useContext } from 'react'
import { appStore } from '../../state/app';
import BuyMoreBtn from '../BuyMoreBtn';
import BuyMore from '../BuyMore';

const GenerateBlock = () => {
  return(
    <div className="generate">
      <h2>You don't have a NFT yet</h2>
      <div className='btn-buy-more'>Click “<span>Buy more</span>” to buy</div>
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