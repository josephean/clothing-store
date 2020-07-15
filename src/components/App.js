import React, { Component } from 'react';
import '../styles/App.css'
import Home from './Home.js';
import NavBar from './NavBar';

import CategoryPage from './CategoryPage.js';
import ProductDetailPage from './ProductDetailPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HamburgerMenu } from './HamburgerMenu';

class App extends Component {
  render() {

  return (
    <Router>
    <div id="app-container">
    <HamburgerMenu/>
    <NavBar/>
        <Switch>
        <Route path="/item/:id" render={(props) => (<ProductDetailPage key={props.match.params.id} {...props}/>)}></Route>
        <Route path="/:category/:sub" render={(props) => (<CategoryPage key={props.match.params.id} {...props}/>)}></Route>
        <Route exact path="/"><Home/></Route>
        <Route path=""><h1>404</h1></Route>
        <Route path="*"><h1>404</h1></Route>
      </Switch>
      </div>
    </Router>);
  }
}

export default App;
