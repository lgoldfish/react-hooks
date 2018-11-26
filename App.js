import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;
export default ({ children }) => (
  <Layout className="myApp" style={{ height: '100%' }}>
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">README</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/usestate">USESTATE</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/useeffect">USEEFFECT</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ background: '#fff' }}>{children}</Content>
    <style global jsx>
      {`
                .myApp .ant-layout {
                    height:100%;
                }
            `}
    </style>
  </Layout>
);
