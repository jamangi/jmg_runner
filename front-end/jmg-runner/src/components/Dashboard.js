import React, { Component } from 'react';
import avatar from './assets/img/elliot.jpg';
import { Link } from "react-router-dom";
import axios from "axios";
// function Navbar() {
//   render() {
//     return <h1> Navbar </h1>;
//   }
// }


// This is a es6 stateless function
// const Dashboard = () => 
//  <h1> Dashboard </h1>;


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          runners: []
        }
        

  }

  componentDidMount() {
    // axios.get(`http://web-01.dockerhearts.online:5000/api/v1/routes`)
    //   .then(res => {
    //     console.log(res);
    //   })
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

              <div className="column six wide">
              { /*card */}
                <div className="ui card">
                  <div className="image">
                    <img src={avatar} alt="add picture" />
                  </div>
                  <div className="content">
                    <a className="header">Kristy</a>
                    <div className="meta">
                      <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                      Kristy is an art director living in New York.
                    </div>
                  </div>
                  <div className="extra content">
                    <a>
                      <i className="user icon"></i>
                      22 Friends
                    </a>
                  </div>
                </div>

                  
                  <Link to="/stopwatch">Record</Link>

              </div>


              <div className="column two wide">
                <div>
                  <Link to="/create">Create</Link>
                </div>
                <div>
                  <Link to="/update">Update</Link>
                </div>
                <div>
                  <Link to="/delete">Delete</Link>
                </div>
              </div>


              <div class="column six wide">
              { /* table */}

                  <table class="ui table">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Created At</th>
                        <th>First Name</th>
                        <th>id</th>
                        <th>last name</th>
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