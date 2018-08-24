import React, { Component } from 'react';
import avatar from './assets/img/elliot.jpg';
import { Link } from "react-router-dom";
import axios from "axios";
import Create from "./Create";
import Update from "./Update";


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
                  
               <button className="ui button"><Link to="/Stopwatch">Record</Link></button>
               
               <button className="ui button"><Link to="/create">Create</Link></button>
               

              </div>

              <div class="column twelve wide">
              { /* table */}

                  <table class="ui table">
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
                            <td><button className="ui button"><Link to="/delete" userid={row.id}>Delete</Link></button></td> 
                            <td><button className="ui button"><Link to="/update" userid={row.id}>Update</Link></button></td>
                          </tr>    
                        )
                     )
                    }    
                    </tbody>
                    <tfoot>
                      <tr><th colSpan="3">
                        <div className="ui right floated pagination menu">
                          <a className="icon item">
                            <i className="left chevron icon"></i>
                          </a>
                          <a className="item">1</a>
                          <a className="item">2</a>
                          <a className="item">3</a>
                          <a className="item">4</a>
                          <a className="icon item">
                            <i className="right chevron icon"></i>
                          </a>
                        </div>
                      </th>
                    </tr></tfoot>
                  </table>

              </div>

            </div>

          </div>          
      
  )
 }

}


export default Dashboard;