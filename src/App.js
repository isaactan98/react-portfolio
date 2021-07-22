import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import React, { Component } from "react";

import Home from './webpages';
import Contact from './webpages/contact';
import About from './webpages/about';

import logo from './assets/IZ-LOGO.png';
class App extends Component {
  render() {
    return (
      <Router>
        <header className="App-nav">
          <Link className="App-link main" to="/"><img className="logo" src={logo} alt="logo"/></Link>
          <Link className="App-link" to="/about">About</Link>
          <Link className="App-link" to="/contact">Contact</Link>
        </header>

        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about" exact><About /></Route>
          <Route path="/contact" exact><Contact /></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;


