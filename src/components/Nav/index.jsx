import '../../styles/components/_Nav.scss'
import { scrollToAnchor } from '../../utils/ScrollTo'
import { useState, useRef, memo } from 'react'
import { NavLink } from 'react-router-dom'


function Nav(props) {
  const { background ='#1C1C1C', position='static', navType } = props
  const navData = [{name: 'Introduction'}, {name: 'World'}, {name: 'Species'}, {name: 'Tier'}, {name: 'Airdrop'}, {name: 'Roadmap'}, {name: 'Team'}, {name: 'FAQ'}]
  const [ menuType, setMenuType ] = useState(true)
  const [ menuHeight, setMenuHeight ] = useState(0)
  const menuItem1 = useRef()
  const menuItem2 = useRef()

  const menuClick = () => {
    setMenuType(!menuType)
    setMenuHeight(menuType ? menuItem1.current.clientHeight + menuItem2.current.clientHeight + 'px' : '0')
  }
  
  return (
    <div id="nav" style={{background:background,position:position,top:'0'}}>
    <div className="w">
      <a onClick={()=>scrollToAnchor('app')} style={{cursor:'pointer'}}><h1 className="logo">TORA</h1></a>
      {!navType && <>
        <ul className="nav-social">
        <li><a href="https://opensea.io/collection/toracity" target="_blank"></a></li>
        <li><a href="https://discord.com/invite/Ppx3FHuCw7" target="_blank"></a></li>
        <li><a href="https://twitter.com/_ProjectTora_" target="_blank"></a></li>
      </ul>
      <ul className="nav-tabs">
        {
          navData.map((value,index) => <li key={index}><a onClick={()=>scrollToAnchor(`${value.name}`)}>{ value.name }</a></li>)
        }
        <li><NavLink to="/MYNFTS">MY NFTS</NavLink></li>
      </ul>
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
          navData.map((value, index) => <li key={index}><a onClick={()=>scrollToAnchor(`${value.name}`)}>{ value.name }</a></li>)
        }
        <li><NavLink to="/MYNFTS">MY NFTS</NavLink></li>
      </ul>
      <ul className="bottom-social" ref={menuItem2}>
        <li><a href="https://opensea.io/collection/toracity" target="_blank"></a></li>
        <li><a href="https://discord.com/invite/Ppx3FHuCw7" target="_blank"></a></li>
        <li><a href="https://twitter.com/_ProjectTora_" target="_blank"></a></li>
      </ul>
    </div>}
  </div>
  )
}

export default memo(Nav)