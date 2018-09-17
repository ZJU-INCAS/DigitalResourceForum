import * as React from 'react';
import { List, Avatar, Icon } from 'antd';
import * as Utility from '../utilities/utility';

export default class extends React.Component {

    render() {
        return <div className="demandList"><List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 10,
            }}
            dataSource={this.props.data}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[]}
                    extra={this.props.mode==='noimg'?null:<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" 
                
                    />}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<div>充值金额:{item.tokenNum}</div>}
                        description={<div>审核状态:{item.confirmBank==='R'?"拒绝":(item.confirmBank==='Y'?"通过":"待审核")}</div>}
                    />
                    充值ID:{item.tokenRechargeID}
                </List.Item>
            )}
        /></div>;
    }
}