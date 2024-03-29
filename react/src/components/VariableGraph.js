import Chart from "react-apexcharts";
import React from 'react';

class VariableGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "line",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "series-1",
          data: [43, 72, 23, 94, 49, 26, 14, 99]
        },
        {
          name: "series-2",
          data: [34, 77, 45, 50, 53, 60, 38, 84]
        },
        {
          name: "series-3",
          data: [58, 86, 55, 32, 15, 35, 63, 97]
        }
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
                  width="1000"
                  height="800"
              />
            </div>
          </div>
        </div>
    );
  }
}

export default VariableGraph;