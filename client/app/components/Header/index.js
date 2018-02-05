import React from 'react';
import { Menu, Button } from 'antd';
import { Route, Link, NavLink } from 'react-router-dom';
import './index.less';

export default class Header extends React.Component {
  render() {
    const links = [{
      title: 'About us',
      href: '/about'
    }, {
      title: 'Contact us',
      href: '/contact'
    }];

    return (
      <Menu 
        mode='horizontal' 
        className='App-menu'
      >
        <Menu.Item><Link to='/' className="App-logo" /></Menu.Item>

        {
          links.map((item, index) => {
            return <Menu.Item><NavLink key={index} to={item.href}>{item.title}</NavLink></Menu.Item>
          })
        }

        <Menu.Item><Button><Link to='/login'>登录</Link></Button></Menu.Item>
        <Menu.Item><Button><Link to='/register'>注册</Link></Button></Menu.Item>
      </Menu>
    );
  }
}