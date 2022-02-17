// import '../../styles/components/_Nav.scss'
import { useState, useRef, memo, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { appStore } from '../../state/app';
import ConnectWalletBtn from '../ConnectWalletBtn';
import { formatAccountIdCenter } from '../../utils/near-utils'
import Loader from '../Loader'
function Nav(props) {
  const { background ='#1C1C1C', position='static', navType } = props
  const navData = [{name: 'Introduction'}, {name: 'World'}, {name: 'Species'}, {name: 'Tier'}, {name: 'WHITELIST'}, {name: 'Roadmap'}, {name: 'Team'}, {name: 'FAQ'}]
  const [ menuType, setMenuType ] = useState(true)
  const [ menuHeight, setMenuHeight ] = useState(0)
  const menuItem1 = useRef()
  const menuItem2 = useRef()

  const menuClick = () => {
    setMenuType(!menuType)
    setMenuHeight(menuType ? menuItem1.current.clientHeight + menuItem2.current.clientHeight + (localStorage.undefined_wallet_auth_key ? 40 : 15) + 'px' : '0')
  }
  
  const { state } = useContext(appStore);
  const { wallet, account } = state;

 

  return (
    <div id="nav" style={{background:background,position:position,top:'0'}}>
    <div className="w">
      <a href={'https://tora.city/'} style={{cursor:'pointer'}}><h1 className="logo">TORA</h1></a>
      {!navType && <>
        <ul className="nav-social" style={{right: localStorage.undefined_wallet_auth_key ? '200px' : '0'}}>
        {/* <li><a href="https://opensea.io/collection/toracity" target="_blank" rel="noreferrer">opensea</a></li> */}
        <li><a href="https://discord.com/invite/Ppx3FHuCw7" target="_blank" rel="noreferrer">discord</a></li>
        <li><a href="https://twitter.com/_ProjectTora_" target="_blank" rel="noreferrer">twitter</a></li>
      </ul>
      <ul className="nav-tabs"  style={{right: localStorage.undefined_wallet_auth_key ? '295px' : '90px'}}>
        {
          navData.map((value,index) => <li key={index}><a href={`https://tora.city/#${value.name}`}>{ value.name }</a></li>)
        }
        <li><NavLink to="/my-nfts">MY NFTS</NavLink></li>
        <li><NavLink to="/link-drop">Link Drop</NavLink></li>
      </ul>
      {account?.accountId && (
        <ConnectWalletBtn
          text={formatAccountIdCenter(account.accountId)}
          handleClick={() => wallet.signOut()}
          logOut={ true }
        />
      )}
      </>}
      {
        navType && <div className="menu" onClick={() => menuClick()}>
            <i className="iconfont" dangerouslySetInnerHTML={{__html: menuType ? '&#xe79c;' : '&#xe61a;'}} />
          </div>
      }

    </div>
    {navType && <div className="menuItem" style={{height: menuHeight}}>
      <ul className="top-nav" ref={menuItem1}>
        {
          navData.map((value, index) => <li key={index}><a href={`https://tora.city/#${value.name}`}>{ value.name }</a></li>)
        }
        <li><NavLink to="/my-nfts">MY NFTS</NavLink></li>
        <li><NavLink to="/link-drop">Link Drop</NavLink></li>
      </ul>
      <ul className="bottom-social" ref={menuItem2}>
        {/* <li><a href="https://opensea.io/collection/toracity" target="_blank" rel="noreferrer">opensea</a></li> */}
        <li><a href="https://discord.com/invite/Ppx3FHuCw7" target="_blank" rel="noreferrer">discord</a></li>
        <li><a href="https://twitter.com/_ProjectTora_" target="_blank" rel="noreferrer">twitter</a></li>
        {account?.accountId && (
          <ConnectWalletBtn
            text={formatAccountIdCenter(account.accountId)}
            handleClick={() => {wallet.signOut();menuClick()}}
            logOut={ true }
          />
        )}
      </ul>
    </div>}
  </div>
  )
}

export default memo(Nav)