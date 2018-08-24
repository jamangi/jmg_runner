import React, { Component } from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    }


  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">

        <div className="field">
          <label>
            Username:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>

        <div className="field">
          <label>
            Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>
        

        <button class="ui button" type="submit">Submit</button>
        
      </form>
    );
  }
}


export default Create;
