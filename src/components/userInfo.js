import { Card, Table, Icon, Avatar } from 'antd';
import * as React from 'react';
import * as Utility from '../utilities/utility';
import ItemList from '../components/list';
const { Column, ColumnGroup } = Table;
const { Meta } = Card;

export default class extends React.Component {
  state = { userInfo: { email: '', accountBalance: 0 }, data: [], isShow: false }
  async showRecords() {
    const id = this.props.userInfo.email;
    const items = await Utility.getMyResources(id);
    const data = [];
    for (let item of items) {
      const serviceId = item.serviceID.toString().substring(23);
      const serviceData = await Utility.getResourceById(serviceId);
      data.push(serviceData);
    }
    this.setState({ data: data, isShow: true });
  }
  render() {
    return <div className="userInfoCard"><Card
      style={{ width: "300px", marginTop: "30px" }}
      cover={this.props.mode === 'noimg' ? null : <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
      actions={[<div style={{ width: "100%" }}>余额:{this.props.userInfo.accountBalance}</div>, <div onClick={this.state.isShow ? () => { this.setState({ isShow: false }) } : this.showRecords.bind(this)}>{this.state.isShow ? "隐藏消费记录" : "显示消费记录"}</div>]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={this.props.userInfo.email}
        description="用户简介"
      />
    </Card>
      <div style={{width:"300px", display: this.state.isShow ? "flex" : "none",justifyContent:"center" }}><ItemList data={this.state.data} mode={"noimg"} /></div>
      </div>;
  }
}


