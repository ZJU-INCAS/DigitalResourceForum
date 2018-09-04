import * as React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
export default class extends React.Component {
    render() {
        return <div id="indexPage">
            <div id="mainPageTitle">浙江大学数字教育资源系统</div>

            <img style={{width:"60rem",height:"25rem",marginBottom:"3rem",position:"relative",zIndex:2}}src="/images/bg-masthead.jpg"/>
            <div id="mainPage">

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img style={{height:"8rem"}} alt="example" src="/images/card1.png" />}
            >
                <Meta
                    title="教育资源众筹众创"
                    description="满足用户需求，发挥平台资源"
                />
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img style={{height:"8rem"}} alt="example" src="/images/card2.png" />}
            >
                <Meta
                    title="Hypledger Fabric"
                    description="去中心化区块链铸就信任"
                />
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img style={{height:"8rem"}} alt="example" src="/images/card3.jpg" />}
            >
                <Meta
                    title="浙江大学InCAS实验室"
                    description="技术前沿，可信团队"
                />
            </Card>
        </div></div>;
    }
}