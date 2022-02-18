import { appStore } from '../../state/app';
import React, { useContext } from 'react';
import NftItem from '../NftItem'
const NFTList = (props) => {
  const { state, update } = useContext(appStore);
  const { app } = state;

  const handleClick = (revealMisfits) => {
    
    const newRevealMisfits = { ...app.revealMisfits, ...revealMisfits };

    update('app', { revealMisfits: newRevealMisfits });

    localStorage.setItem('revealMisfits', JSON.stringify(newRevealMisfits));
  };
  return (
    <div style={{background: '#fff'}}>
      <div className="NFT-List">
        {app.misfitsArray.map((item) => (
          <NftItem
            key={item.token_id}
            item={item.metadata}
            isReveal={app.revealMisfits[item.token_id]}
            urlIpfs={app.urlIpfs}
            onClick={handleClick}
            navType={props.navType}
          />
        ))}
        
      </div>

    </div>
  )
}

export default NFTList