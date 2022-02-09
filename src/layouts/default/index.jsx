import React, { useEffect, useContext, useState } from 'react';
import { appStore, onAppMount } from '../../state/app';
import { BrowserRouter } from 'react-router-dom'
import Router from '../../router'
import Layout from '../Layout';
// import routes from './routes';
// import './styles/Main.scss';
import { useViewport } from '../../utils/viewportContext'
import Nav from '../../components/Nav';

const Main = () => {
  const { dispatch } = useContext(appStore);

  const onMount = () => {
    dispatch(onAppMount());
  };

  useEffect(onMount, []);

  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

export default Main;
