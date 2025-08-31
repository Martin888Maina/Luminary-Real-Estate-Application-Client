import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UnorderedListOutlined, LogoutOutlined, DollarCircleOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;

const OwnerDashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UploadOutlined />,
              label: <Link to="./UploadForm" style={{ textDecoration: 'none' }}>Upload Form</Link>,
            },
            {
              key: '2',
              icon: <UnorderedListOutlined />,
              label: <Link to="./OwnerCRUD" style={{ textDecoration: 'none' }}>Listings</Link>,
            },
            {
              key: '3',
              icon: <LogoutOutlined />,
              label: <Link to="./Logout" style={{ textDecoration: 'none' }}>Logout</Link>,
            },
            {
              key: '4',
              icon: <DollarCircleOutlined />,
              label: <Link to="./OwnerTransactions" style={{ textDecoration: 'none' }}>Transaction</Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 0px' }}>
          <div
            className="site-layout-background"
            style={{
              padding: 10,
              minHeight: 1000,
              backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1678208881212-67caec2d4baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGtleXN8ZW58MHx8MHx8fDA%3D")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <h1 style={{ color: 'white' }}>Welcome to the Owner Dashboard</h1>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default OwnerDashboard;
