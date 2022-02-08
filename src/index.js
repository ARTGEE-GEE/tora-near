import React from 'react'
import ReactDOM from 'react-dom'

import { AppProvider } from './state/app';
import './styles/base.scss'
import './styles/font.scss'
import './assets/iconfonts/iconfont.css'
import './styles/home.scss'
import Default from './layouts/default'
import { Buffer } from 'buffer'
window.Buffer = Buffer

ReactDOM.render(
  <AppProvider>
      <Default />
   
  </AppProvider>,
  document.getElementById('root')
);
