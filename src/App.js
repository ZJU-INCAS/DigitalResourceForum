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
import Recharge from './recharge';
import Navigator from './navigation';
import Header from './header'
import Issue from './issue';
import Account from './account';
import Transfer from './transfer';
import Withdraw from './withdraw';
import List from './list';
import Manage from './manage';
import Index from './mainPage';
class App extends Component {
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
                 </div>
            </div>
          </div>
        </Router>

    );
  }
}

export default App;