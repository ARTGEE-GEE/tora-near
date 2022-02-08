import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

export const ScrollToTop = props =>{
  const {pathname} = useLocation();
  useEffect(()=>{
    !/personal\//.test(pathname) && window.scrollTo(0,0)
  },[pathname]);
  
  return props.children;

}

// 锚点移动动画
export const scrollToAnchor = (anchorName) => {
  if (anchorName) {
    // 找到锚点
    let anchorElement = document.getElementById(anchorName);
    // 若是对应id的锚点存在，就跳转到锚点
    if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
  }
}