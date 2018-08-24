import React, { Component } from 'react';
import avatar from './assets/img/elliot.jpg';
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
  }


  render() {
    return (

          <div className="ui grid">

            <div className="row">

              <div class="column eight wide">
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

                  <button className="ui inverted red button">Record</button>


                <hr />



              </div>


              <div class="column eight wide">
              { /* table */}


                  <table class="ui  table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Distance</th>
                        <th>Calorie</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="ui ribbon label">First</div>
                        </td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr class="positive">
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr class="error">
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>

                      <tr class="positive">
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>

                    </tbody>
                    <tfoot>
                      <tr><th colspan="3">
                        <div class="ui right floated pagination menu">
                          <a class="icon item">
                            <i class="left chevron icon"></i>
                          </a>
                          <a class="item">1</a>
                          <a class="item">2</a>
                          <a class="item">3</a>
                          <a class="item">4</a>
                          <a class="icon item">
                            <i class="right chevron icon"></i>
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