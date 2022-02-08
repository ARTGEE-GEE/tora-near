import { Switch, Route } from 'react-router-dom'
import {ScrollToTop} from '../utils/ScrollTo'
import Buy from '../views/Buy'
import MYNFTS from '../views/MYNFTS'
import { ViewportProvider } from '../utils/viewportContext'
import { appStore, onAppMount } from '../state/app'
import React, { useEffect, useContext } from 'react'



function Router() {

  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount())
    console.log(dispatch)
  };

  useEffect(onMount, []);
  return(
    <ViewportProvider>
      <ScrollToTop>
        <Switch>
          <Route exact path={ '/' } component={ Buy } />
          <Route exact path={ '/MYNFTS' } component={ MYNFTS } />
        </Switch>
      </ScrollToTop>
    </ViewportProvider>
  )
}

export default Router