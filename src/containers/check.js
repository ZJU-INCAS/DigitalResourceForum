import * as React from 'react';
import * as Utility from '../utilities/utility';
import {List,Avatar} from 'antd';


export default class extends React.Component{
    state={data:[{user:"test1"}]}
    async componentDidMount(){
        const data = await Utility.getRechargeCheckList();
        console.log(data);
        this.setState({data:data});
    }
    async confirm(item){
        const response = await Utility.checkRecharge(item.tokenRechargeID,'accept');
        if(response.status===200){
            alert("审核通过");
            const data = await Utility.getRechargeCheckList();
            console.log(data);
            this.setState({data:data});
        }
    }
    async reject(item){
        const response = await Utility.checkRecharge(item.tokenRechargeID,'reject');
        if(response.status===200){
            alert("拒绝成功");
            const data = await Utility.getRechargeCheckList();
            console.log(data);
            this.setState({data:data});
        }
    }
    render(){
        return  <List
        itemLayout="horizontal"
        dataSource={this.state.data}
        renderItem={item => (
          <List.Item  actions={[<a onClick={this.confirm.bind(this,item)}>通过</a>,<a onClick={this.reject.bind(this,item)}>拒绝</a>]}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<div>{item.user}</div>}
              description={<div><div>交易ID:{item.tokenRechargeID}</div><div>充值金额:{item.tokenNum}</div></div>}
             
            />
          </List.Item>
        )}
      />;
    }
}