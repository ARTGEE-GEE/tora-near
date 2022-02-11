import React, { useState, useEffect, useContext } from 'react';
import { appStore } from '../../state/app';
import { useViewport } from '../../utils/viewportContext'
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import Nav from '../../components/Nav'
import Footer from '../../layouts/Footer'
import NoNfts from '../NoNfts';
import ShareableCircle from './ShareableCircle'
import ShareableLink from './ShareableLink'
import ShareableInput from './ShareableInput'
import SaveBtn from './SaveBtn'
import {GenerateBtn} from '../../components/Generate/GenerateBlock'
import { Image } from 'antd'
import ShareSocialLinks from '../../components/ShareSocialLinks'
import ModuleBanner from '../../components/ModuleBanner';

const LinkDrop = () => {
  const [ navType, setNavType ] = useState(false)
  const { width } = useViewport();
  useEffect(() => {
    setNavType(width < 1220 ? true : false)
  },[width])
  const { state, update } = useContext(appStore);
  const { app, account } = state;
  const { soldOut } = app;

  const [linkDropArray, setLinkDropArray] = useState([...app.linkDropArray]);

  const [activeIndex, setActiveIndex] = useState(0);

  const { handleCopy } = useCopyToClipboard();

  useEffect(() => {
    if (app.linkDropArray.length) {
      setLinkDropArray([...app.linkDropArray]);
    }
  }, [app.linkDropArray]);

  const handleBlur = (e) => {
    const text = e.target.value;
    const dataIndex = +e.target.dataset.index;

    // update text for input
    const updatedLinkDropArray = linkDropArray.map((item, index) =>
      dataIndex === index ? { ...item, text } : item,
    );

    // update in state
    setLinkDropArray(updatedLinkDropArray);

    // update text in global state
    update('app.linkDropArray', [...updatedLinkDropArray]);

    // update in local storage for user
    localStorage.setItem(
      `linkDropArray:${account.accountId}`,
      JSON.stringify([...updatedLinkDropArray]),
    );
  };

  const handleCircleClick = (index) => setActiveIndex(index);
  // copy to clipboard when share social links (instagram/wechat/descord)

  const handleShareSocialLinks = () => {
    const activeText = linkDropArray[activeIndex]?.text;
    const activeLink = linkDropArray[activeIndex]?.link;
    const copyText = `${activeText}  ${activeLink}`;
    handleCopy(copyText);
  };
  return (
    <>
      <Nav position="fixed" navType={ navType }/>
      {
        (localStorage.undefined_wallet_auth_key && linkDropArray.length) ? (
          <div className="link-drop">
          <div className="content">
            <div className="banner">
              <ModuleBanner />
              <div className="link-drop-center">
                <h2>choose an nft blind box gift link share with friends of tora</h2>
                <div className="link-drop__box">
                  <div className="link-drop__content">
                    <ul className='link-drop__list'>
                      {/* <li className="link-drop__item" key={a.id}>
                        <ShareableCircle
                          activeLinkForShare={activeIndex}
                          onClick={handleCircleClick}
                          index={0}
                        />
                        <div className="link-drop__inputs">
                          <ShareableLink link={a.link} />
                          <ShareableInput
                            text={a.text}
                            index={0}
                            onBlur={handleBlur}
                          />
                        </div>
                      </li>
                      <li className="link-drop__item" key={a.id}>
                        <ShareableCircle
                          activeLinkForShare={activeIndex}
                          onClick={handleCircleClick}
                          index={1}
                        />
                        <div className="link-drop__inputs">
                          <ShareableLink link={a.link} />
                          <ShareableInput
                            text={a.text}
                            index={1}
                            onBlur={handleBlur}
                          />
                        </div>
                      </li> */}
                      {linkDropArray.map((item, index) => (
                        <li className="link-drop__item" key={item.id}>
                        <ShareableCircle
                          activeLinkForShare={activeIndex}
                          onClick={handleCircleClick}
                          index={index}
                        />
                        <div className="link-drop__inputs">
                          <ShareableLink link={item.link} />
                          <ShareableInput
                            text={item.text}
                            index={index}
                            onBlur={handleBlur}
                          />
                        </div>
                      </li>
                      ))}
                    </ul>
                    <div className="link-drop__save">
                      <SaveBtn linkDropArray={linkDropArray} />
                    </div>
                    <ShareSocialLinks
                      color="red"
                      className="link-drop__share-links"
                      text={linkDropArray[activeIndex]?.text}
                      link={linkDropArray[activeIndex]?.link}
                      onClick={handleShareSocialLinks}
                    />
                  </div>
                  <Image src="https://tora-assets.oss-cn-hongkong.aliyuncs.com/images/bannerTiger/banner@1x.png" preview={false} />
                </div>
              </div>
            </div>
            <div className="generate">
              <GenerateBtn soldOut={soldOut}  />
            </div>
          </div>
        </div>
        ) : (
          <NoNfts />
        )
      }
      <Footer navType={navType}/>
    </>
  )
}

export default LinkDrop