// import '../../styles/NoNfts.scss'
import { Image } from 'antd'
import React, { useContext, memo } from 'react';
import { appStore } from '../../state/app';
import Generate from '../../components/Generate/Generate'
import ConnectWalletBtn from '../../components/ConnectWalletBtn'
import { formatAccountIdCenter } from '../../utils/near-utils'

function NoNfts() {
  
  const { state } = useContext(appStore);
  const { wallet, account, app } = state;
  const { soldOut } = app;
  return (
    <div className="no-nfts">
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
        <Generate  />
      </div>
  </div>
  )
}

export default memo(NoNfts)