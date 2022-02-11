import { useContext } from 'react'
import BuyMoreBtn from "../BuyMoreBtn"
import { appStore } from '../../state/app';

const GenerateSoldOut = () => {
  const { update, state } = useContext(appStore);
  const modalOpen = () => update('app.modalOpen', true);

  return (
    <div className="generate-sold-out">
      <h2>Sold Out</h2>
      <div className="generate-btn">
        {state.app.misfitsArray.length ? <BuyMoreBtn onClick={modalOpen} text="Send NFT">Send NFT</BuyMoreBtn>: <></>}
        <a
          className="generate-sold-out__link"
          href="https://paras.id/search?q=tora.tenk.near&sort=priceasc&pmin=.01&is_verified=true"
          target="_blank"
          rel="noopener noreferrer"
        >Buy on Paras</a>
      </div>
    </div>
  )
}

export default GenerateSoldOut