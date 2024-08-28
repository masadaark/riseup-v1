import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Navbar></Navbar>
      </Header>
      <Content style={{ padding: '' }}>
        
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        RISE-UP @{new Date().getFullYear()} Mr.Masada
      </Footer>
    </Layout>
  );
};

export default App;