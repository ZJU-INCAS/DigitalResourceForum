import { Menu, Icon, Switch } from 'antd';
import {withRouter} from 'react-router-dom'
import * as React from 'react';
const SubMenu = Menu.SubMenu;

class UserSider extends React.Component {
  state = {
    theme: 'dark',
    current: '0',
  }


  handleClick = (e) => {
    switch(e.key){
      case '0':this.props.history.push('/');break;
      case '1':this.props.history.push('/user/account');break;
      case '2':this.props.history.push('/user/recharge');break;
      case '3':this.props.history.push('/user/withdraw');break;
      case '4':this.props.history.push('/user/transfer');break;
      case '5':this.props.history.push('/user/list');break;
      case '10':this.props.history.push('/user/resource');break;
      case '11':this.props.history.push('/user/myresource');break;
    }
    this.setState({
      current: e.key,
    });
  }
  render() {

    return (
      <div>
  
        <Menu
          theme="Light"
          onClick={this.handleClick}
          style={{ width: 256 }}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Menu.Item key="0">主页</Menu.Item>
          <SubMenu key="sub1" title={<span>账户业务</span>}>
            <Menu.Item key="1">账户信息</Menu.Item>
            <Menu.Item key="2">充值</Menu.Item>
            <Menu.Item key="3">提现</Menu.Item>
            <Menu.Item key="4">转账</Menu.Item>
          </SubMenu>
            <Menu.Item key="10">资源列表</Menu.Item>
            <Menu.Item key="11">我的资源</Menu.Item>
            <Menu.Item key="5">需求列表</Menu.Item>
            <Menu.Item key="9">注销</Menu.Item>
        </Menu>
      </div>
    );
  }
}
class PmSider extends React.Component {
  state = {
    theme: 'dark',
    current: '0',
  }


  handleClick = (e) => {
    switch(e.key){
      case '0':this.props.history.push('/');break;
      case '1':this.props.history.push('/pm/users');break;
      case '7':this.props.history.push('/pm/manage');break;
      case '8':this.props.history.push('/pm/check');break;
      case '10':this.props.history.push('/user/resource');break;
    }
    this.setState({
      current: e.key,
    });
  }
  render() {

    return (
      <div>
  
        <Menu
          theme="Light"
          onClick={this.handleClick}
          style={{ width: 256 }}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Menu.Item key="0">主页</Menu.Item>
            <Menu.Item key="1">管理用户</Menu.Item>
            <Menu.Item key="7">管理需求</Menu.Item>
            <Menu.Item key="8">审核</Menu.Item>
        </Menu>
      </div>
    );
  }
}
class SmSider extends React.Component {
  state = {
    theme: 'dark',
    current: '0',
  }


  handleClick = (e) => {
    switch(e.key){
      case '0':this.props.history.push('/');break;
      case '5':this.props.history.push('/user/list');break;
      case '7':this.props.history.push('/pm/manage');break;
      case '8':this.props.history.push('/pm/check');break;
      case '10':this.props.history.push('/user/resource');break;
    }
    this.setState({
      current: e.key,
    });
  }
  render() {

    return (
      <div>
  
        <Menu
          theme="Light"
          onClick={this.handleClick}
          style={{ width: 256 }}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Menu.Item key="0">主页</Menu.Item>
            <Menu.Item key="10">资源列表</Menu.Item>
            <Menu.Item key="5">需求列表</Menu.Item>
            <Menu.Item key="7">管理需求</Menu.Item>
            <Menu.Item key="8">审核</Menu.Item>
        </Menu>
      </div>
    );
  }
}
export const UserNavigator = withRouter(UserSider);
export const PmNavigator = withRouter(PmSider);
export const SmNavigator = withRouter(SmSider);
