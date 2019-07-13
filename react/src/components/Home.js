import React, { Component } from 'react';
import SphereImage from "../img/sphere.jpg";


class Home extends Component {
    render() {
      return (
        <div className="home__background">

        <nav>
        <div class="nav-wrapper">
    
           <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a>Home</a></li>
           </ul>
         </div>
        </nav>




            <img src={ SphereImage } alt="sphere" class="center" ></img>
        
            <div class="row" >
            <div class="col s6 offset-s3" >
            <div class="card light-green" >
            <div class="card-content white-text">
              <span class="card-title">Seattle Spheres Data</span>
              <hr></hr>
              <br></br>
              <p>Temperature Data: <a class="btn-floating btn-small waves-effect waves-blue"><i class="material-icons">+</i></a> </p>
              <br></br>
              <p>Dew Point Data: <a class="btn-floating btn-small waves-effect waves-blue"><i class="material-icons">+</i></a> </p>
              <br></br>
              <p>CO2 Data: <a class="btn-floating btn-small waves-effect waves-blue"><i class="material-icons">+</i></a> </p>
              <br></br>
              <p>Humidity Data: <a class="btn-floating btn-small waves-effect waves-blue"><i class="material-icons">+</i></a></p>
            </div>
            
            </div>
            </div>
            </div>


            <div class="row" >
            <div class="col s6 offset-s3" >
            <div class="card light-green" >
            <div class="card-content white-text">
              <span class="card-title">Comparators</span>
              <hr></hr>
              <br></br>
              <p>Temperature + CO2 Data:  <a class="btn-floating btn-small waves-effect waves-blue"><i class="material-icons">+</i></a> </p>
              <br></br>
              <p>Graph: <a class="btn-floating btn-small waves-effect waves-blue"><i class="material-icons">+</i></a> </p>
              <br></br>
              <a class="btn-floating btn-medium waves-effect waves-blue"><i class="material-icons">+</i></a>
            </div>
            
            </div>
            </div>
            </div>




        </div>
 

      );
    }
}

export default Home;