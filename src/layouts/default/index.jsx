import React, { useEffect, useContext } from 'react';
import { appStore, onAppMount } from '../../state/app';
import { BrowserRouter } from 'react-router-dom'
import Router from '../../router'
import Layout from '../Layout';
// import routes from './routes';
// import './styles/Main.scss';

const Main = () => {
  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount());
  };

  useEffect(onMount, []);
  return (
    <Layout>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Layout>
  );
};

export default Main;
