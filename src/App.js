import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login/Login';
import SPdetails from './components/Login/SPdetails';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      {/* <div>
        <Login />
      </div> */}
      <BrowserRouter>
        <div className="App">

          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/cart" component={Cart} />
            <Route path="/Home" component={Home} />
            <Route path="/SPdetails" component={SPdetails} />
          </Switch>
        </div>
      </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
