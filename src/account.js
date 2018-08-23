import { Card,Table, Divider, Tag } from 'antd';
import * as React from 'react';
const { Column, ColumnGroup } = Table;


export default class extends React.Component{
    
    render(){
        return  <Card title="账户信息">
        <Card
          type="inner"
          title="账户名称"
        >
          MOOC管理员
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="账户地址"
        >
          0x1rno1inr1oiro1i5rr
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="账户余额"
        >
          2512.24
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="银行卡号"
        >
          2351351251256102647
        </Card>
        </Card>;
    }
}
 

