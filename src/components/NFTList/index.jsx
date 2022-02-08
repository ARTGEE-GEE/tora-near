import { appStore } from '../../state/app';
import React, { useContext } from 'react';
import NftItem from '../NftItem'
import '../../styles/components/_NFTList.scss'
const NFTList = () => {
  const { state, update } = useContext(appStore);
  const { app } = state;

  console.log(app.misfitsArray,'-=-=-')
  const handleClick = (revealMisfits) => {
    const newRevealMisfits = { ...app.revealMisfits, ...revealMisfits };

    update('app', { revealMisfits: newRevealMisfits });
    localStorage.setItem('revealMisfits', JSON.stringify(newRevealMisfits));
  };
  return (
    <div style={{background: '#fff'}}>
      <div className="NFT-List">
        <NftItem />
        <NftItem />
        <NftItem />
        <NftItem />
        <NftItem />
        <NftItem />
        <NftItem />
        <NftItem />
        <NftItem />
        <NftItem />
        {/* {app.misfitsArray.map((item) => (
          <NftItem
            key={item.token_id}
            item={item.metadata}
            isReveal={app.revealMisfits[item.token_id]}
            urlIpfs={app.urlIpfs}
            onClick={handleClick}
          />
        ))} */}
      </div>

    </div>
  )
}

export default NFTList