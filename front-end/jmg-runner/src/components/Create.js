import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

// axios.defaults.headers.post['Content-Type'] = 'application/json';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      create_at: "",
      first_name: "",
      id:"",
      last_name: "",
      password: 1234,

    }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);  

  }

  // handling multiple states
  handleChange(event) {

    const target = event.target;
    const value = target.value;
    const name = target.name;

    // abstract state
    this.setState({
      [name]: value
    });
  }

 handleSubmit(event) {
    event.preventDefault();

    axios.post('http://web-01.dockerhearts.online:5000/api/v1/users', {
        "username": this.state.user,
        "first_name": this.state.first_name,
        "last_name": this.state.last_name,
      }, {header: {
          "Accept-Version":1,
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json; charset=utf-8"
        }
      }
      ).then(function (response) {
        alert("A user has been added");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });




  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">

        <h1>Create New User</h1>

        <div className="field">
          <label>
            User:
            <input name="user" type="text" value={this.state.user} onChange={this.handleChange} />
          </label>
        </div>

        <div className="field">
          <label>
            Created At:
            <input name="create_at" type="text" value={this.state.create_at} onChange={this.handleChange} />
          </label>
        </div>
        
        <div className="field">
          <label>
            First Name:
            <input name="first_name" type="text" value={this.state.first_name} onChange={this.handleChange} />
          </label> 
        </div>


        <div className="field">
          <label>
            id:
            <input name="id" type="text" value={this.state.id} onChange={this.handleChange} />
          </label>
        </div>


        <div className="field">
          <label>
            Last Name:
            <input name="last_name" type="text" value={this.state.last_name} onChange={this.handleChange} />
          </label>
        </div>

        <button class="ui button" type="submit" >Submit</button>
        <Link to="/dashboard"> Back </Link>
      </form>

    );
  }
}


export default Create;
