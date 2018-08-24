import React, { Component } from 'react';
import Dashboard from './Dashboard';


// stateless component using es 5 | vanilla javascipt


// function Login() {
//     return ( 
//       <div>
//       <form className="ui form">
//         <div className="field">
//           <label>First Name
//             <input type="text" name="first-name" placeholder="First Name"/>
//           </label>
//         </div>
//         <div className="field">
//           <label>Last Name
//             <input type="text" name="last-name" placeholder="Last Name"/>
//           </label>
//         </div>
//         <div className="field">
//           <div className="ui checkbox">
//             <input type="checkbox" tabindex="0" className="hidden"/>
//             <label>I agree to the Terms and Conditions</label>
//           </div>
//         </div>
//         <button className="ui button" type="submit">Submit</button>
//       </form>
//     </div>
//     )
// }



// Login with authentication and using a class
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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


export default Login;
