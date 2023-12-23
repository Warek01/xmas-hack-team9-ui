import React, { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Layout } from '@components';
import { toastDefaultProps } from '@constants/toast-default-props';

const App: FC = () => {
  return (
    <>
      <ToastContainer {...toastDefaultProps} />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default memo(App);
