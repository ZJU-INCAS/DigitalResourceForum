import { Menu, Icon } from 'antd';
import React from 'react';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <img style={{height:"3rem"}} src="./images/logo.png" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header