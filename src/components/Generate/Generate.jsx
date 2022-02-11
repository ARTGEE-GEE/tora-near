import GenerateBlock from "./GenerateBlock"
import LogOut from './LogOut'
// import '../../styles/components/_Generate.scss'
const Generate = () => {
  return (
    <>
      {
        localStorage.undefined_wallet_auth_key ? <GenerateBlock /> : <LogOut />
      }
    </>
  )
}

export default Generate