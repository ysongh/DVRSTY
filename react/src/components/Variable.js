import React, { Component } from 'react';
import VariableCard from "./VariableCard";

class Variable extends Component {
  render() {
    return (
        <div>
          <div className="row">
            <div className="col 10 offset-s2">
              <VariableCard cardName="Temperature"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Variable;