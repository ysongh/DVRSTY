import React from 'react';
import LineChart from "./Graph";
class DataCard extends React.Component {
  render() {

    return (
            <div className="card light-green">
              <div className="card-content white-text">
                <p>{this.props.cardName} Data:</p>
                <LineChart/>
                <a className="btn-floating btn-small waves-effect waves-blue"><i
                    className="material-icons">+</i></a>
              </div>
            </div>
    );
  }
}

export default DataCard;