import { Table, Divider, Tag } from 'antd';
import * as React from 'react';
const { Column, ColumnGroup } = Table;


export default class extends React.Component{
    
    render(){
        const data = [{
            key: '1',
            name: 'MOOC管理员',
            address: '0x1rno1inr1oiro1i5rr',
            balance: 20000,
            bankAccount: '124897421059215890',
          }];
        return  <Table dataSource={data}>
        <ColumnGroup title="账户信息">
          <Column
            title="账户名称"
            dataIndex="name"
            key="name"
          />
          <Column
            title="账户地址"
            dataIndex="address"
            key="address"
          />
              <Column
          title="账户余额"
          dataIndex="balance"
          key="balance"
        />
        <Column
          title="银行卡号"
          dataIndex="bankAccount"
          key="bankAccount"
        />
        </ColumnGroup>
    
      </Table>;
    }
}
 