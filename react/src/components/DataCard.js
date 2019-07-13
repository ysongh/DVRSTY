import React from 'react';
import LineChart from "./Graph";
class DataCard extends React.Component {
  render() {

    return (
            <div className="card light-green" style={{width: '100%'}}>
              <div className="card-content black-text">
                <p>{this.props.cardName} Data:</p>
                <LineChart/>
                <a href='/variable' className="waves-effect waves-teal btn-flat">More</a>
              </div>
            </div>
    );
  }
}

export default DataCard;