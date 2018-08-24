import React, { Component } from 'react';

// function Navbar() {
//   render() {
//     return <h1> Navbar </h1>;
//   }
// }


// This is a es6 stateless function
class Stopwatch extends Component {



  render() {
    return (
      <div className="row">
        

         <div className="ui card">
        <div className="content">
          <div className="header">
            Record
          </div>
          <div className="meta">
            <h1 id="timer"><time>00:00:00</time></h1>

          </div>
          </div>
          <div className="content">
            <button className="ui inverted red button" id="start">start</button>
            <button className="ui inverted red button" id="stop">stop</button>
            <button className="ui inverted red button" id="clear">clear</button>
          </div>
          <div className="content extra">
            <button className="ui button" type="button" name="button">Read More</button>
          </div>
      </div>


      </div>
    );
  }
}




export default Stopwatch;