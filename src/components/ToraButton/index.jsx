// import '../../styles/components/_Button.scss'
function ToraButton({src='javascript:void(0)', value, target="_blank"}) {
  return (
    <div id="button" className="btn">
      <a href={src} target={target}>{ value } <img src={`https://tora-assets.oss-cn-hongkong.aliyuncs.com/images/button/button@2x.png`} alt="" className="img"/></a>
    </div>
  )
}

export default ToraButton