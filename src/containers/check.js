import * as React from 'react';
import * as Utility from '../utilities/utility';
import { List, Avatar, Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class RecordList extends React.Component {
   state={data:[]}
   componentDidMount(){
    console.log(this.state.data);
    console.log("==");
    console.log(this.props.data);
       this.setState({data:this.props.data});
   }
    async confirm(item) {
        const response = await Utility.checkRecharge(item.tokenRechargeID, 'accept');
        if (response.status === 200) {
            alert("审核通过");
            const data = await Utility.getRechargeCheckList();
            console.log(data);
            this.setState({ data: data });
        }
    }
    async reject(item) {
        const response = await Utility.checkRecharge(item.tokenRechargeID, 'reject');
        if (response.status === 200) {
            alert("拒绝成功");
            const data = await Utility.getRechargeCheckList();
            console.log(data);
            this.setState({ data: data });
        }
    }
    render() {

        return <List
            itemLayout="horizontal"
            dataSource={this.state.data}
            renderItem={item => (
                <List.Item actions={this.props.mode !== 'dur' ? null : [<a onClick={this.confirm.bind(this, item)}>通过</a>, <a onClick={this.reject.bind(this, item)}>拒绝</a>]}>
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
export default class extends React.Component {
    state = { dList:[],aList:[],rList:[] }
    async componentDidMount() {
        const dList = await Utility.getRechargeCheckList();
        const aList= await Utility.getAcceptedReqs();
        const rList = await Utility.getRejectedReqs();
        this.setState({ dList:dList,aList:aList,rList:rList });
    }

    render() {
        console.log(this.state.dList);
        return <Tabs defaultActiveKey="1">
            <TabPane tab="待审核" key="1">
            <RecordList data={this.state.dList} key="1" mode={'dur'} />
            </TabPane>
            <TabPane tab="已通过审核记录" key="2">
            <RecordList data={this.state.aList} key="2" mode={'acc'} />
            </TabPane>
            <TabPane tab="未通过审核记录" key="3">
            <RecordList data={this.state.rList} key="3" mode={'rej'} />
            </TabPane>
        </Tabs>;
    }
}