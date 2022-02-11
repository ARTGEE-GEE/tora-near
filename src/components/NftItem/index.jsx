import { useState, useEffect } from 'react'
import { Image, Skeleton, Spin  } from 'antd';
import Reveal from '../../views/MYNFTS/Reveal'

const NftItem = ({ item, onClick, isReveal, urlIpfs, navType }) => {
  const [reveal, setReveal] = useState(isReveal);
  const [info, setInfo] = useState({});

  useEffect(async () => {
    try {
      const response = await fetch(`${urlIpfs}/${item.reference}`);
      const data = await response.json();
      setInfo(data);
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }, []);
  const handleClick = () => {
    setReveal(true);
    onClick({ [item.title]: true });
  };
  
  return (
    <div className="NftItem">
      {
        reveal ? (
          <>
            <Image src={`${urlIpfs}/${item.media}`} placeholder={<Skeleton.Image />} preview={!navType} />
            {/* <Image src={`${urlIpfs}/${item.media}`} placeholder={<Spin />} preview={!navType} /> */}
            {/* <Spin /> */}
            <div className="item">
              <div className="title"><span>#{item?.title?.padStart(5, '0')}</span> | <span>S-1-1</span></div>
            </div>
          </>
        ) : (
          <Reveal title={item?.title} handleClick={handleClick} />
        )
      }
    </div>
  )
}

export default NftItem