import React from 'react';
import VariableGraph from "./VariableGraph";
class VariableCard extends React.Component {
  render() {

    return (
        <div className="card light-green">
          <div className="card-content white-text">
            <p>{this.props.cardName} Data:</p>
            <VariableGraph/>
          </div>
        </div>
    );
  }
}

export default VariableCard;