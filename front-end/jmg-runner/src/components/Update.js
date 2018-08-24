import React, { Component } from 'react';
import { Link } from "react-router-dom";
    
class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">

        <h1>Update User</h1>

        <div className="field">
          <label>
            User:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>

        <div className="field">
          <label>
            Created At:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>
        
        <div className="field">
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>

        <button class="ui button" type="submit">Submit</button>
        <Link to="/dashboard"> Back </Link>
      </form>

    );
  }
}


export default Update;
