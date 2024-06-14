import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {PhoneOutlined, UserOutlined, FileTextOutlined, UnorderedListOutlined, LogoutOutlined} from '@ant-design/icons';

const { Content, Sider } = Layout;

const AdminPanel = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"  icon={<PhoneOutlined />}>
            <Link to="/components/crud/contactCRUD/DisplayContact" style={{ textDecoration: 'none' }}>Contact</Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<FileTextOutlined />}>
            <Link to="/components/crud/reportCRUD/DisplayReport" style={{ textDecoration: 'none' }}>Report</Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/DisplayData" style={{ textDecoration: 'none' }}>User</Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<UnorderedListOutlined />}>
            <Link to="./DisplayCRUD" style={{ textDecoration: 'none' }}>Listings</Link>
          </Menu.Item>

          <Menu.Item key="19" icon={<LogoutOutlined />}>
            <Link to="./Logout" style={{ textDecoration: 'none' }}>Logout</Link>
          </Menu.Item>
          
        </Menu>

      </Sider>
     
        <Layout className="site-layout">
                <Content style={{ margin: '0 0px' }}>
                  <div className="site-layout-background" style={{ padding: 10, minHeight: 1000, backgroundImage: 'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFkbWlufGVufDB8fDB8fHww")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <h1 style={{ color: 'white' }}>Welcome to the Administrative Dashboard</h1>
                  </div>
                </Content>
              </Layout>
         </Layout>
  );
};

export default AdminPanel;



