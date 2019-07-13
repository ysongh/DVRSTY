import React, { Component } from 'react';
import SphereImage from "../img/sphere.jpg";

class Home extends Component {
    render() {
      return (
        <div>
            <h4></h4>
            <img src={ SphereImage } alt="sphere" class="center" ></img>
        
            <div class="row" >
            <div class="col s6 offset-s3" >
            <div class="card light-green" >
            <div class="card-content white-text">
              <span class="card-title">Seattle Spheres Data</span>
              <hr></hr>
              <br></br>
              <p>Temperature Data:  <button> More </button>  </p>
              <br></br>
              <p>Dew Point Data: <button> More </button>  </p>
              <br></br>
              <p>CO2 Data: <button> More </button>  </p>
              <br></br>
              <p>Humidity Data: <button> More </button>   </p>
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
              <p>Temperature + CO2 Data:  <button> More </button>  </p>
              <br></br>
              <p>Graph: <button> More </button>  </p>
              <br></br>
              
            </div>
            
            </div>
            </div>
            </div>




        </div>
 

      );
    }
}

export default Home;