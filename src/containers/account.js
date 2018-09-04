import { Card,Table, Icon, Avatar} from 'antd';
import * as React from 'react';
import * as Utility from '../utilities/utility';
const { Column, ColumnGroup } = Table;
const {Meta} = Card;

export default class extends React.Component{
    state={userInfo:{email:'',accountBalance:0}}

    async componentDidMount(){
      const userId = localStorage.getItem("userId");
      const userInfo = await Utility.getUserInfo(userId);
      this.setState({userInfo:userInfo});
    }
    render(){
        return    <Card
        style={{ width: 300 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<div style={{width:"100%"}}>余额:{this.state.userInfo.accountBalance}</div>]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={this.state.userInfo.email}
          description="用户简介"
        />
      </Card>;
    }
}
 

