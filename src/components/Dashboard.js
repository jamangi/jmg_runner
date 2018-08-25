import React, { Component } from 'react';
import avatar from './assets/img/elliot.jpg';
import { Link } from "react-router-dom";
import axios from "axios";


// This is a ES6 Class
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          runners: [],

        }
        
  }
 
  componentDidMount() {
      axios.get(`http://web-01.dockerhearts.online:5000/api/v1/users`)
      .then(res => {
        console.log(res.data);
        this.setState({runners:res.data})
      }).catch((error) =>{
        alert(error);
      })
  }

  render() {
    return (

          <div className="ui grid">

            <div className="row">

              <div className="column four wide">
              { /*card */}
                <div className="ui card">
                  <div className="image">
                    <img src={avatar} alt="add picture" />
                  </div>
                  <div className="content">
                    <a className="header">Admin</a>
                    <div className="meta">
                      <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                      Admin has CRUD privileges
                    </div>
                  </div>
                  <div className="extra content">
                    <a>
                      <i className="user icon"></i>
                      {this.state.runners.length} Employees
                    </a>
                  </div>
                </div>
                              
              </div>

              <div className="column twelve wide">
              { /* table */}

                  <table className="ui table">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Created At</th>
                        <th>First Name</th>
                        <th>id</th>
                        <th>last name</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                     this.state.runners.map(row => (
                          <tr className="positive">
                            <td>{row.record_num}</td>
                            <td>{row.created_at}</td>
                            <td>{row.first_name}</td>
                            <td>{row.id}</td>
                            <td>{row.last_name}</td>
                          </tr>    
                        )
                     )
                    }    
                    </tbody>
                  </table>

              </div>

            </div>

          </div>          
      
  )
 }

}


export default Dashboard;