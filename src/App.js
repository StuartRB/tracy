import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ClaimDetails from './ClaimDetails';
import Home from './Home';
import Nav from './Nav';


function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/claimdetails/:claimNumber" component={ClaimDetails}></Route>
      </Switch>
    </Router>
  );
}

export default App;
