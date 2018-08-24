import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Stopwatch from './components/Stopwatch';
import Create from "./components/Create";
import Delete from "./components/Delete";
import Update from "./components/Update";
import { BrowserRouter as Router, Route } from "react-router-dom";

// This is a react class component. 

class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar />
          <Router>
            <div>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/stopwatch" component={Stopwatch} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/delete" component={Delete} />
              <Route exact path="update" component={Update} />
            </div>
          </Router>

        <hr/>

        <Footer/>

      </div>
    );
  }
}

export default App;
