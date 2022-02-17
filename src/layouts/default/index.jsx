import React, { useEffect, useContext } from 'react';
import { appStore, onAppMount } from '../../state/app';
import { BrowserRouter } from 'react-router-dom'
import Router from '../../router'
import Layout from '../Layout';
import Loader from '../../components/Loader'
const Main = () => {
  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount());
  };

  useEffect(onMount, []);
  const { state } = useContext(appStore);
  const {wallet} = state;

  if(!wallet) {
    return <Loader />
  }
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

export default Main;
