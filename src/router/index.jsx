import { Switch, Route, Redirect } from 'react-router-dom'
import {ScrollToTop} from '../utils/ScrollTo'
import Buy from '../views/NoNfts'
import MYNFTS from '../views/MYNFTS'
import LinkDrop from '../views/LinkDrop'
import { ViewportProvider } from '../utils/viewportContext'
import { appStore, onAppMount } from '../state/app'
import React, { useEffect, useContext } from 'react'



function Router() {

  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount())
  };

  useEffect(onMount, []);
  return(
    <ViewportProvider>
      <ScrollToTop>
        <Switch>
          <Route exact path={ '/my-nfts' } component={ MYNFTS } />
          <Route exact path={ '/link-drop' } component={ LinkDrop } />
          <Redirect from={ '/'} to={'/my-nfts'} />
        </Switch>
      </ScrollToTop>
    </ViewportProvider>
  )
}

export default Router