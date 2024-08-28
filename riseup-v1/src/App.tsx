import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DepositTableWebPage from './page/DepositTable.page';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Navbar />
        </Header>
        <Content style={{ padding: '0 50px', marginTop: '16px' }}>
          <Routes>
            <Route path="/deposit-table" element={<DepositTableWebPage></DepositTableWebPage>} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          RISE-UP @{new Date().getFullYear()} Mr.Masada
        </Footer>
      </Router>
    </Layout>
  );
};

export default App;
