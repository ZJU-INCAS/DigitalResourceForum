import { Menu, Icon, Switch } from 'antd';
import {withRouter} from 'react-router-dom'
import * as React from 'react';
const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
  state = {
    theme: 'dark',
    current: '0',
  }


  handleClick = (e) => {
    switch(e.key){
      case '1':this.props.history.push('/account');break;
      case '2':this.props.history.push('/recharge');break;
      case '3':this.props.history.push('/withdraw');break;
      case '4':this.props.history.push('/transfer');break;
      case '5':this.props.history.push('/list');break;
      case '6':this.props.history.push('/issue');break;
      case '7':this.props.history.push('/manage');break;
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
            <Menu.Item key="5">需求列表</Menu.Item>
            <Menu.Item key="6">发布需求</Menu.Item>
            <Menu.Item key="7">管理需求</Menu.Item>
            <Menu.Item key="8">注销</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navigator = withRouter(Sider);