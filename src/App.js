import React from 'react';
import './App.css';
import { Layout } from 'antd';
import DefaultLayout from 'views/DefaultLayout.js';
const { Header, Content } = Layout;

function App() {
  return <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <img alt={'phongvu-icon'} src={require('./asset/phongvu-icon.png')} style={{ height: '80%' }} />
      <h1 style={{ display: 'inline', fontSize: '30px', color: 'white' }} className="mx-4 align-middle">
        Price Tag
      </h1>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64, height: '100vh', backgroundColor: 'white' }}>
      <DefaultLayout />
    </Content>
  </Layout>
}

export default App;
