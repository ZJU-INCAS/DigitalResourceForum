import * as React from 'react';
import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `微积分课程需求`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: '985大学新生微积分课程预习',
        content: '需要有多年教学经验的大学教授，针对高中生的只是储备，在暑假有限的时间内，让高中毕业生能尽快的完成对大学微积分的预习，使之可以在本科一年级期间学习更加轻松。',
    });
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

export default class extends React.Component {
    async buy(item){

    }
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
            footer={<div><b>ant design</b> footer part</div>}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[<a onClick={this.buy.bind(this,item)}>购买</a>,<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" 
                
                    />}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<div>{item.serviceName}</div>}
                        description={<div><div>课程提供:{item.serviceProvider}</div><div>价格:{item.servicePrice}</div></div>}
                    />
                    {item.serviceID}
                </List.Item>
            )}
        /></div>;
    }
}