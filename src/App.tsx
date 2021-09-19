import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import { Layout } from 'antd';
import Navbar from './components/Navbar/Navbar';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

import './App.css';

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username' || '')} as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
