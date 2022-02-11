
import React, { useState, useEffect, useContext } from 'react';
import { appStore } from '../../state/app';
import Nav from '../../components/Nav'
import Footer from '../../layouts/Footer'
import NFTList from '../../components/NFTList';
import { useViewport } from '../../utils/viewportContext'
import { GenerateBtn } from '../../components/Generate/GenerateBlock';
import NoNfts from '../NoNfts'
import ModuleBanner from '../../components/ModuleBanner';

const MYNFTS = () => {
  const [ navType, setNavType ] = useState(false)
  const { width } = useViewport();
  useEffect(() => {
    setNavType(width < 1325 ? true : false)
  },[width])
  const { state } = useContext(appStore);
  const { soldOut } = state.app;
  return(
    <div className="MYNFTS">
      <Nav position="fixed" navType={ navType }/>
      <ModuleBanner />
      {(localStorage.undefined_wallet_auth_key && state.app.misfitsArray.length) ? (<div className="my-nft-content">
          <NFTList navType={navType}/>
          <div className="generate">
            <GenerateBtn soldOut={soldOut} />
          </div>
        </div> ) : (
          <NoNfts />
        )
      }
      <Footer navType={navType}/>
    </div>
  )
}

export default MYNFTS
