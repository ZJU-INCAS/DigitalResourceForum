import * as React from 'react';
import List from '../components/list';
import * as Utility from '../utilities/utility';

export default class extends React.Component{
    state={data:[]}
    async componentDidMount(){
        const userId = localStorage.getItem("userId");
        const items = await Utility.getMyResources(userId);
        const data = [];
        for(let item of items){
            const serviceId = item.serviceID.toString().substring(23);
            const serviceData = await Utility.getResourceById(serviceId);
            data.push(serviceData);
        }
        this.setState({data:data});
    }
    render(){
        return <List data={this.state.data} mode={"my"}/>;
    }
}