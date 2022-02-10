import { appStore } from '../../state/app';
import React, { useContext, memo } from 'react';
import { formatAccountIdCenter } from '../../utils/near-utils'
import ConnectWalletBtn from '../ConnectWalletBtn';
const ModuleBanner = () => {
  const { state } = useContext(appStore);
  const { wallet, account } = state;
  return (
    <div className="ModuleBanner">
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
  )
}

export default memo(ModuleBanner)