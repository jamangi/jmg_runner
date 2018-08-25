import React, { Component } from 'react';



// This is a es6 stateless function. Stateless meaning not managing states or sending in properties(props)
const Footer = () => 
  <div className="ui inverted vertical footer segment">

  <div className="ui center aligned container">
        <a className="item" href="#">JMG-Runner (Insert Logo)</a>
      <div className="ui inverted section divider"></div>
          <div className="ui horizontal inverted small divided link list">
            <a className="item" href="">Site Map</a>
            <a className="item" href="">Contact Us</a>
            <a className="item" href="">Terms and Conditions</a>
            <a className="item" href="">Privacy Policy</a>
          </div>
    </div>
  </div>



export default Footer;