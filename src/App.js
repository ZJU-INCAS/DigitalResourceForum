import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import RegisterServiceWork from './registerServiceWorker';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Recharge from './containers/recharge';
import {PmNavigator,SmNavigator,UserNavigator} from './components/navigation';
import Header from './components/header'
import Issue from './containers/issue';
import Account from './containers/account';
import Transfer from './components/transfer';
import Withdraw from './containers/withdraw';
import List from './components/list';
import Manage from './containers/manage';
import Index from './containers/mainPage';
import Check from './containers/check';
import Resource from './containers/resource';
import MyResource from './containers/myresource';
import Users from './containers/users';
class App extends Component {
  componentDidMount(){
    //测试用用户名
    localStorage.setItem("userId","test1@qq.com");
  }
  render() {
    return (
  
        <Router>
          <div>
              <Header />
              <div className="App">
        <Route path='/user' component={UserNavigator} />
        <Route path='/pm' component={PmNavigator} />
        <Route path='/sm' component={SmNavigator} />
                <div id="mainBody">
                   <Route exact path='/' component={Index} />
                   <Route exact path='/user' component={Index} />
                   <Route exact path='/pm' component={Index} />
                   <Route path='/user/recharge' component={Recharge}/>
                   <Route path='/user/issue' component={Issue} />
                   <Route path='/user/account' component={Account} />
                   <Route path='/user/transfer' component={Transfer} />
                   <Route path='/user/withdraw' component={Withdraw} />
                   <Route path='/user/list' component={List} />
                   <Route path='/pm/manage' component={Manage} />
                   <Route path='/pm/check' component={Check} />
                   <Route path='/pm/users' component={Users} />
                   <Route path='/user/resource' component={Resource} />
                   <Route path='/user/myresource' component={MyResource} />
                 </div>
            </div>
          </div>
        </Router>

    );
  }
}

export default App;