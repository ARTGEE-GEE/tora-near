
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { appStore } from '../../state/app';
import Nav from '../../components/Nav'
import Footer from '../../layouts/Footer'
import NFTList from '../../components/NFTList';
import { useViewport } from '../../utils/viewportContext'
import { GenerateBtn } from '../../components/Generate/GenerateBlock';
// import '../../styles/MyNfts.scss'
import NoNfts from '../NoNfts'
import ModuleBanner from '../../components/ModuleBanner';

const MYNFTS = () => {
  const [ navType, setNavType ] = useState(false)
  const { width } = useViewport();
  useEffect(() => {
    setNavType(width < 1325 ? true : false)
  },[width])
  const history = useHistory();
  const { state } = useContext(appStore);

  const nftsCount = state.app.misfitsArray.length;
  useEffect(() => {
    console.log(nftsCount, 'nftsCount')
    if (!localStorage.undefined_wallet_auth_key) {
      // history.replace('/');
    }
  },[])
  return(
    <div className="MYNFTS">
      <Nav position="fixed" navType={ navType }/>
      <ModuleBanner />
      {localStorage.undefined_wallet_auth_key ? (<div className="my-nft-content">
          <NFTList navType={navType}/>
          <div className="generate">
            <GenerateBtn />
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
