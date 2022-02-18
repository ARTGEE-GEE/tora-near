import { Image } from 'antd'
// import '../../styles/components/_LogOut.scss'
const LogOut = () => {
  return (
    <div className="logOut">
      <h2>Introduction of TORA</h2>
      <div className="logOut-content">
        <div className="content-left">
          <h3>Get your hands on one of the most precious dope-art NFTs on NEAR Protocol.<br />You are almost there. You have 3 steps to accomplish:</h3>
          <div className="text">
            <p>1) Connect the wallet at the top of the page;</p>
            <p>2) Click "Buy more".</p>
            <p>3) Pick the amount of TORA: 1 or 10;</p>
            <p>The price for one is only 8.5 Ⓝ.</p>
            {/* <p>*登陆钱包查看您拥有的 NFT</p> */}
          </div>
        </div>
        <Image src="https://tora-assets.oss-cn-hongkong.aliyuncs.com/images/Introduction/Introduction1x.png" preview={false} />
      </div>
    </div>
  )
}
export default LogOut