import React, { Component } from 'react';
import SphereImage from "../img/sphere.jpg";
import LineChart from "./Graph";

class Home extends Component {
    render() {
      return (
        <div>
            <div class="row" >
            <div class="col s6 offset-s3" >
            <div class="card light-green" >
            <div class="card-content white-text">
              <span class="card-title">Seattle Spheres Data</span>
              <hr></hr>
              <br></br>
              <p>Temperature Data: </p>
              <LineChart />
              <br></br>
              <p>Dew Point Data:</p>
              <LineChart />
              <br></br>
              <p>CO2 Data:</p>
              <LineChart />
              <br></br>
              <p>Humidity Data: </p>
              <a className="btn-floating btn-small waves-effect waves-blue"><i
                  className="material-icons">+</i></a>
              <LineChart />
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
              <p>Temperature + CO2 Data: </p> <LineChart />
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