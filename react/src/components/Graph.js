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
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      
      fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 30]
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
                  width="800"
                  height="200"
              />
            </div>
          </div>
        </div>
    );
  }
}

export default LineChart;