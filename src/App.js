import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Games from './components/Pages/Games';
import Profile from './components/Pages/Profile';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/games" exact component={Games}/>
        <Route path="/profile" exact component={Profile}/>
      </Switch>
    </Router>
  );
}

export default App;
