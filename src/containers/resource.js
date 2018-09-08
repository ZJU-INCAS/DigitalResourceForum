import * as React from 'react';
import List from '../components/list';
import * as Utility from '../utilities/utility';

export default class extends React.Component{
    state={data:[]}
    async componentDidMount(){
        const userId = localStorage.getItem("userId");
        const data = await Utility.getResources();
        const myData = await Utility.getMyResources(userId);
        for(let i in data){
            data[i].isBought=false;
            for(let j in myData){
                if(data[i].serviceID===myData[j].serviceID.substring(23)){
                    data[i].isBought=true;
                    break;
                }
            }
        }
        console.log(data);
        this.setState({data:data});
    }
    render(){
        return <List data={this.state.data} mode="res"/>;
    }
}