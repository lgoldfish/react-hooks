import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { pathname } = window.location;
const {
  Header, Footer, Sider, Content,
} = Layout;
export default ({ children }) => (
  <Layout className="myApp" style={{ height: '100%' }}>
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[pathname]}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="/"><Link to="/">README</Link></Menu.Item>
        <Menu.Item key="/usestate"><Link to="/usestate">USESTATE</Link></Menu.Item>
        <Menu.Item key="/useeffect"><Link to="/useeffect">USEEFFECT</Link></Menu.Item>
        <Menu.Item key="/customhook"><Link to="/customhook">CUSTOMHOOK</Link></Menu.Item>
        <Menu.Item key="/usecontext"><Link to="/usecontext">USECONTEXT</Link></Menu.Item>
        <Menu.Item key="/usereducer"><Link to="/usereducer">USEREDUCER</Link></Menu.Item>
        <Menu.Item key="/hookredux"><Link to="/hookredux">HOOKREDUX</Link></Menu.Item>
        <Menu.Item key="/useref"><Link to="/useref">USEREF</Link></Menu.Item>
        <Menu.Item key="/usecallback"><Link to="/usecallback">USECALLBACK</Link></Menu.Item>
        <Menu.Item key="/usememo"><Link to="/usememo">USEMEMO</Link></Menu.Item>
        <Menu.Item key="/useImperativeMethods"><Link to="/useImperativeMethods">useImperativeMethods</Link></Menu.Item>
        <Menu.Item key="/UseLayoutEffect"><Link to="/UseLayoutEffect">UseLayoutEffect</Link></Menu.Item>
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
