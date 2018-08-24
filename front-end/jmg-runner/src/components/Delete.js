import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }


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
        <Link to="/dashboard"> Back </Link>
      </form>
    );
  }
}


export default Delete;
