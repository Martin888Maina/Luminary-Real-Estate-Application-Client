// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styling/OwnerDashboard.css';

// const OwnerDashboard = () => {
//     return (
//         <div className="landing-page">
//             <div className="container text-center">
//                 <h1 className="mt-5 mb-5 landing-heading">Welcome to the Owner Dashboard</h1>

//                 <div className="action-buttons">
//                     <div className="mb-5">
//                         <p className="landing-text">Proceed to the upload form?</p>
//                         <Link to="./UploadForm" className="btn btn-primary mr-3 action-button">
//                             Upload
//                         </Link>
//                     </div>

//                     <div className="mb-5">
//                         <p className="landing-text">Proceed to your Listings</p>
//                         <Link to="./DisplayCRUD" className="btn btn-primary mr-3 action-button">
//                             Listings
//                         </Link>
//                     </div>

//                     <div className="mb-5">
//                         <p className="landing-text">Proceed to the Logout?</p>
//                         <Link to="./Logout" className="btn btn-primary mr-3 action-button">
//                             Logout
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default OwnerDashboard;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styling/OwnerDashboard.css';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import { UploadFile, ListAlt, ExitToApp } from '@mui/icons-material'; // Import icons from Material-UI

// const OwnerDashboard = () => {
//     return (
//         <div className="dashboard-container">
//             <Drawer
//                 className="drawer"
//                 variant="permanent"
//                 anchor="left"
//             >
//                 <List>
//                     <ListItem component={Link} to="./UploadForm">
//                         <ListItemIcon><UploadFile /></ListItemIcon>
//                         <ListItemText primary="Upload Form" />
//                     </ListItem>
//                     <ListItem component={Link} to="./DisplayCRUD">
//                         <ListItemIcon><ListAlt /></ListItemIcon>
//                         <ListItemText primary="Listings" />
//                     </ListItem>
//                     <ListItem component={Link} to="./Logout">
//                         <ListItemIcon><ExitToApp /></ListItemIcon>
//                         <ListItemText primary="Logout" />
//                     </ListItem>
//                 </List>
//             </Drawer>

//             <div className="main-content">
//                 <div className="container text-center">
//                     <h1 className="mt-5 mb-5 landing-heading">Welcome to the Owner Dashboard</h1>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default OwnerDashboard;


import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UnorderedListOutlined, LogoutOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;

const OwnerDashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UploadOutlined />}>
            <Link to="./UploadForm" style={{ textDecoration: 'none' }}>Upload Form</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UnorderedListOutlined />}>
            <Link to="./DisplayCRUD" style={{ textDecoration: 'none' }}>Listings</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<LogoutOutlined />}>
            <Link to="./Logout" style={{ textDecoration: 'none' }}>Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 0px' }}>
          <div className="site-layout-background" style={{ padding: 10, minHeight: 1000, backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1678208881212-67caec2d4baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGtleXN8ZW58MHx8MHx8fDA%3D")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <h1 style={{ color: 'white' }}>Welcome to the Owner Dashboard</h1>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default OwnerDashboard;


