
import React, { useContext, useState, useEffect } from 'react';
import Nav from '../../components/Nav'
import Footer from '../../layouts/Footer'
import NFTList from '../../components/NFTList';
import { useViewport } from '../../utils/viewportContext'
import { GenerateBtn } from '../../components/Generate/GenerateBlock';
import '../../styles/components/_MyNfts.scss'
const MYNFTS = () => {
  const [ navType, setNavType ] = useState(true)
  const { width } = useViewport();
  useEffect(() => {
    setNavType(width < 1260 ? true : false)
  },[width])

  return(
    <div className="MYNFTS">
      <Nav position="fixed" navType={ navType }/>
      <div className="my-nft-content">
        <NFTList />
        <div className="generate">
          <GenerateBtn />
        </div>
      </div>
      <Footer navType={navType}/>
    </div>
  )
}

export default MYNFTS