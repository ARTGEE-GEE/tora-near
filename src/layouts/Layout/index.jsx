import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { appStore } from '../../state/app';
import Modal from '../Modal';


const Layout = ({ children }) => {
  const { state } = useContext(appStore);
  const { modalOpen } = state.app;
  return (
    <>
      {children}
      {modalOpen && <Modal />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
