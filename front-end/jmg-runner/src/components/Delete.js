import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }


  }

   handleSubmit(event) {

      event.preventDefault();

      axios.delete(`http://web-01.dockerhearts.online:5000/api/v1/users/` + this.props.userid, {
      },{header: {
          "Accept-Version":1,
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json; charset=utf-8"
      }})
      .then(res => {
        console.log(res.data);
        console.log("User " + this.state + " has been deleted.");
      }).catch((error) =>{
        alert(error);
      })
      
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">

        <h1>Delete User</h1>

        <div className="field">
          <label>
            ID:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>

        <button class="ui button" type="submit">Submit</button>
        <Link to="/"> Back </Link>
      </form>
    );
  }
}


export default Delete;
