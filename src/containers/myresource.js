import * as React from 'react';
import List from '../components/list';
import * as Utility from '../utilities/utility';

export default class extends React.Component{
    state={data:[]}
    async componentDidMount(){
        const userId = localStorage.getItem("userId");
        const data = await Utility.getMyResources(userId);
        this.setState({data:data});
    }
    render(){
        return <List data={this.state.data}/>;
    }
}