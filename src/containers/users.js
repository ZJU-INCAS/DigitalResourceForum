import * as React from 'react';
import * as Utility from '../utilities/utility';
import UserCard from '../components/userInfo';
export default class extends React.Component{
    state={data:[]}
    async componentDidMount(){
        console.log("heres");
        const data = await Utility.getUsers();
        this.setState({data:data});
    }
    convertUserToCards(item){
        return <UserCard userInfo={item} mode={"noimg"}/>;
    }
    render(){
        return <div>{this.state.data.map(this.convertUserToCards)}</div>;
    }
}