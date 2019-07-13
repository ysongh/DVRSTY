import React from 'react';
import LineChart from "./Graph";
import GraphError from './GraphError';

class DataCard extends React.Component {
  render() {
    console.log("error", this.props.errorD);
    return (
            <div className="card light-green" style={{width: '100%'}}>
              <div className="card-content black-text">
                <p>{this.props.cardName} Data:</p>
                <LineChart data={this.props.data}/>
                <p>{this.props.cardName} Error:</p>
                <GraphError data={this.props.errorD} />
              </div>
            </div>
    );
  }
}

export default DataCard;