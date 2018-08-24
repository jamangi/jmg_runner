import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class Update extends React.Component {
  constructor(props) {
    super(props.userid);
    console.log(props)  
    this.state = {
      first_name: '',
      last_name: ''
    }

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this); 

  }
    
    handleSubmit(event) {

      event.preventDefault();

      axios.put(`http://web-01.dockerhearts.online:5000/api/v1/users/` + this.props.userid, {
      first_name: '1111111',
      last_name: '11111111'},
      {header: {
          "Accept-Version":1,
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json; charset=utf-8"
      }})
      .then(res => {
        console.log(res.data);
        alert("User " + this.state + " has been updated.");
      }).catch((error) =>{
        alert(error);
      })
      
    }

    handleChange(event) {

      const target = event.target;
      const value = target.value;
      const name = target.name;

      // abstract state
      this.setState({
        [name]: value
      });
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">

        <h1>Update User</h1>

        <div className="field">
          <label>
            First Name:
            <input type="text" name="first-name" value={this.state.first_name} onChange={this.handleChange} />
          </label>
        </div>

        <div className="field">
          <label>
            Last Name:
            <input type="text" name="last-name" value={this.state.last_name} onChange={this.handleChange} />
          </label>
        </div>
      
        <button class="ui button" type="submit">Submit</button>
        <button class="ui button"><Link to="/"> Back </Link></button>
      </form>

    );
  }
}


export default Update;
