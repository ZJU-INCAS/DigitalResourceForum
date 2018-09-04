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
import Navigator from './components/navigation';
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
import MyResource from './containers/myresource'
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
        <Navigator />
                <div id="mainBody">
                   <Route exact path='/' component={Index} />
                   <Route path='/recharge' component={Recharge}/>
                   <Route path='/issue' component={Issue} />
                   <Route path='/account' component={Account} />
                   <Route path='/transfer' component={Transfer} />
                   <Route path='/withdraw' component={Withdraw} />
                   <Route path='/list' component={List} />
                   <Route path='/manage' component={Manage} />
                   <Route path='/check' component={Check} />
                   <Route path='/resource' component={Resource} />
                   <Route path='/myresource' component={MyResource} />
                 </div>
            </div>
          </div>
        </Router>

    );
  }
}

export default App;