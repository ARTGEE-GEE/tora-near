import { useContext } from 'react'
import GenerateBlock from "./GenerateBlock"
import LogOut from './LogOut'
import { appStore } from '../../state/app';
// import '../../styles/components/_Generate.scss'
const Generate = () => {
  
  const { state, update } = useContext(appStore);
  
  const { app, account } = state;
  console.log(localStorage.undefined_wallet_auth_key,'---------')
  return (
    <>
      {
        localStorage.undefined_wallet_auth_key ? <GenerateBlock /> : <LogOut />
      }
    </>
  )
}

export default Generate