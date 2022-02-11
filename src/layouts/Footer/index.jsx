import Nav from '../../components/Nav'
import { NavLink } from 'react-router-dom'
function Footer(props) {
  const { navType } = props
  return (
    <div className="footer">
    { !navType && <Nav background="#000" />}
    {navType && <div className="footerHeader">
      <NavLink to="/"><h1 className="logo">TORA</h1></NavLink>
      <ul>
        {/* <li><a href="https://opensea.io/collection/toracity" target="_blank" rel="noopener noreferrer">{null}</a></li> */}
        <li><a href="https://discord.com/invite/Ppx3FHuCw7" target="_blank" rel="noopener noreferrer">{null}</a></li>
        <li><a href="https://twitter.com/_ProjectTora_" target="_blank" rel="noopener noreferrer">{null}</a></li>
      </ul>
    </div>}
    <div className="footerTitle w">
      <p>&#169; 2021 Tora. All Rights Reserved </p>
    </div>
  </div>
  )
}

export default Footer