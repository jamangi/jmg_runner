import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Stopwatch from './components/Stopwatch';
// This is a react class component. 

class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar />

        <hr/>

        <Stopwatch />

        <hr/>

        <Footer/>

      </div>
    );
  }
}

export default App;
