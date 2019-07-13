import React, { Component } from 'react';
import LineChart from "./Graph";
import DataCard from "./DataCard";

class Home extends Component {
    render() {
      return (
        <div>
          <div className="row">
            <div className="col s6">
              <DataCard cardName="Temperature"/>
            </div>
            <div className="col s6">
              <DataCard cardName="CO2"/>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <DataCard cardName="Dew Point"/>
            </div>
            <div className="col s6">
              <DataCard cardName="Humidity"/>
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