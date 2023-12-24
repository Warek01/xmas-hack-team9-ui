import React, { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import { Layout } from '@components';
import { toastDefaultProps } from '@constants/toast-default-props';

const App: FC = () => {
  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <ToastContainer {...toastDefaultProps} />
      <Layout>
        <Outlet />
      </Layout>
    </QueryParamProvider>
  );
};

export default memo(App);
