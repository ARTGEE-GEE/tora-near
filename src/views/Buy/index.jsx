import Nav from '../../components/Nav'
import { useViewport } from '../../utils/viewportContext'
import Footer from '../../layouts/Footer'
import '../../styles/Buy.scss'
import { Image } from 'antd'
import React, { useEffect, useState, useContext, memo } from 'react';
import { appStore } from '../../state/app';
import Generate from '../../components/Generate/Generate'
import ConnectWalletBtn from '../../components/ConnectWalletBtn'
import { formatAccountIdCenter } from '../../utils/near-utils'

function Buy() {
  const [ navType, setNavType ] = useState(true)
  const { width } = useViewport();
  useEffect(() => {
    setNavType(width < 1260 ? true : false)
  },[width])
  
  const { state } = useContext(appStore);
  const { wallet, account } = state;
  console.log(state, 'state')
  console.log(wallet, 'wallet')
  console.log(account, 'account')
  return (
    <div className="buy">
      <Nav position="fixed" navType={ navType }/>
      <div className="content">
        <div className="banner">
          <Image src="https://tora-assets.oss-cn-hongkong.aliyuncs.com/images/tiger_silhouette.png" preview={false} width={318}/>
          {account?.accountId ? (
              <ConnectWalletBtn
                text={formatAccountIdCenter(account.accountId)}
                handleClick={() => wallet.signOut()}
                logOut={ true }
              />
          ) : (
            <ConnectWalletBtn handleClick={() => wallet.signIn()} />
          )}
        </div>
        <Generate />
      </div>
    <Footer navType={navType}/>
  </div>
  )
}

export default memo(Buy)