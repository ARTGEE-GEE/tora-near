import { useContext } from 'react'
import GenerateBlock from "./GenerateBlock"
import LogOut from './LogOut'
import { appStore } from '../../state/app';
// import '../../styles/components/_Generate.scss'
const Generate = () => {
  
  const { state, update } = useContext(appStore);
  
  const { app, account } = state;

  return (
    <>
      {
        localStorage.undefined_wallet_auth_key ? <GenerateBlock /> : <LogOut />
      }
    </>
  )
}

export default Generate