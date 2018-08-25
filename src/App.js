import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
  



// This is a react class component. 
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          
            
          <Dashboard/>              
            
          
        <hr/>

        <Footer/>

      </div>
    );
  }
}

export default App;
