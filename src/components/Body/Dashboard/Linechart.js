import React, { Component } from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// charts
import { chartOptions, parseOptions, lineChart } from "chart.js";

export class Linechart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      data: "data1",
    };

    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      data: this.state.data, //=== "data1" ? "data2" : "data1",
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="colmb-5 mb-xl-0" xl="8">
            <div className="card bg-gradient-default shadow">
              <div className="card-header bg-transparent">
                <div className="row">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">
                      COVID-19 Timeline by Coutry
                    </h2>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart">
                  <Line
                    data={lineChart[this.state.data]}
                    options={lineChart.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Linechart;
