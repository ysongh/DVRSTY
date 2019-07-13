import Chart from "react-apexcharts";
import React from 'react';

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "line",
        },
      },
      series: [
        {
          name: "Sensors-1",
          data: this.props.data
        },
      ]
    };
  }

  render() {
    return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="line"
                  width="600"
                  height="200"
              />
            </div>
          </div>
        </div>
    );
  }
}

export default LineChart;