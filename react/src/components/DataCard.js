import React from 'react';
import LineChart from "./Graph";
class DataCard extends React.Component {
  render() {
    console.log(this.props.data);
    return (
            <div className="card light-green" style={{width: '100%'}}>
              <div className="card-content black-text">
                <p>{this.props.cardName} Data:</p>
                <LineChart data={this.props.data}/>
                <a href='/variable' className="waves-effect waves-teal btn-flat">More</a>
              </div>
            </div>
    );
  }
}

export default DataCard;