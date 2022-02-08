import { Image } from 'antd';

const NftItem = ({ item, onClick, isReveal, urlIpfs }) => {
  
  return (
    <div className="NftItem">
      <Image src="https://tora-assets.oss-cn-hongkong.aliyuncs.com/images/WorldSettings/WorldSettings1x.png" preview={false} />
      <div className="item">
        <div className="title"><span>#0014</span> | <span>S-1-1</span></div>
      </div>
    </div>
  )
}

export default NftItem