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
          name: "Sensor-1",
          data: this.props.data.sensor_1
        },
        {
          name: "Sensor-2",
          data: this.props.data.sensor_2
        },
        {
          name: "Sensor-3",
          data: this.props.data.sensor_3
        },
        {
          name: "Sensor-4",
          data: this.props.data.sensor_4
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