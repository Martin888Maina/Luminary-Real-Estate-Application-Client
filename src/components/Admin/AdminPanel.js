import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { PhoneOutlined, UserOutlined, FileTextOutlined, UnorderedListOutlined, DollarCircleOutlined, LogoutOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;

const AdminPanel = () => {
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
              icon: <PhoneOutlined />,
              label: <Link to="/components/crud/contactCRUD/DisplayContact" style={{ textDecoration: 'none' }}>Contact</Link>,
            },
            {
              key: '2',
              icon: <FileTextOutlined />,
              label: <Link to="/components/crud/reportCRUD/DisplayReport" style={{ textDecoration: 'none' }}>Report</Link>,
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: <Link to="/DisplayData" style={{ textDecoration: 'none' }}>User</Link>,
            },
            {
              key: '4',
              icon: <UnorderedListOutlined />,
              label: <Link to="./DisplayCRUD" style={{ textDecoration: 'none' }}>Listings</Link>,
            },
            {
              key: '5',
              icon: <LogoutOutlined />,
              label: <Link to="./Logout" style={{ textDecoration: 'none' }}>Logout</Link>,
            },
            {
              key: '6',
              icon: <DollarCircleOutlined />,
              label: <Link to="./Transactions" style={{ textDecoration: 'none' }}>Transaction</Link>,
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
              backgroundImage: 'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFkbWlufGVufDB8fDB8fHww")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <h1 style={{ color: 'white' }}>Welcome to the Administrative Dashboard</h1>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPanel;

