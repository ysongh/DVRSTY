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
            <div class="card blue-grey darken-1" >
            <div class="card-content white-text">
              <span class="card-title">Seattle Spheres</span>
              <hr></hr>
              <br></br>
              <p>Temperature:  <button> More </button>  </p>
              <br></br>
              <p>Dew Point: <button> More </button>  </p>
              <br></br>
              <p>CO2: <button> More </button>  </p>
              <br></br>
              <p>Humidity: <button> More </button>   </p>
            </div>
            
            </div>
            </div>
            </div>


        </div>
 

      );
    }
}

export default Home;