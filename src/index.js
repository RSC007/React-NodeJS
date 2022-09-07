import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvide } from './Components/Context/AuthProvider';

import { Layout } from './Components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvide>
      <Layout/>
    </AuthProvide>
  </React.StrictMode>
);
