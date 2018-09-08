import { Card,Table, Icon, Avatar} from 'antd';
import * as React from 'react';
import * as Utility from '../utilities/utility';
import UserCard from '../components/userInfo';
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
        return   <UserCard userInfo={this.state.userInfo} mode={"img"} />;
    }
}
 

