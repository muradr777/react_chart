import React, { Component } from "react";
import Grid from "./Grid";

class Charts extends Component {
  state = {
    total: 4000,
    limitStep: 3,
    users: [],
    data: [
      {
        id: 0,
        name: "Dragana Zivkovic-Micunovic",
        data: 3545
      },
      {
        id: 1,
        name: "Nana Patarashvili",
        data: 3023
      },
      {
        id: 2,
        name: "Vanessa Hernandez",
        data: 2670
      },
      {
        id: 3,
        name: "Marina Fursiy",
        data: 2484
      },
      {
        id: 4,
        name: "Negrut Flori",
        data: 1980
      },
      {
        id: 5,
        name: "Bruce King",
        data: 1680
      },
      {
        id: 6,
        name: "Amanda Reynolds",
        data: 1205
      },
      {
        id: 7,
        name: "Hannah Graham",
        data: 654
      },
      {
        id: 8,
        name: "Amanda Reynolds",
        data: 520
      },
      {
        id: 9,
        name: "Hannah Graham",
        data: 305
      }
    ]
  };

  getGridSteps = () => {
    const steps = [];
    const { total } = this.state;
    let step = Math.round(((total / 10) * 100) / 100);
    for (let i = 0; i <= total; i += step) steps.push(i);

    return steps;
  };

  getBarWidth = data =>
    Math.round(((data * 100) / this.state.total) * 100) / 100 + "%";

  setUsers = () => {};

  render() {
    let { users } = this.state;

    users = users.slice(0, this.getMoreData());

    return (
      <div className="stats-new-container">
        <div className="container">
          <div className="stats-new-title text-center">{this.props.title}</div>
          <section id="chart__stats" className="stats-charts-container">
            {users.length !== 0 ? (
              users.map(({ id, name, data }) => {
                let barStyle = {
                  width: this.getBarWidth(data)
                };

                return (
                  <div key={id} className="charts-item__row">
                    <div className="charts-item__title">{name}</div>
                    <div className="charts-item__bar">
                      <span style={barStyle} className="charts__bar__counter">
                        {data}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center">
                Currently there no data in Chart...
              </div>
            )}

            <Grid rows={users.length} cols={10} steps={this.getGridSteps()} />
          </section>
          <div className="stats-chart-expand text-center">
            <button
              className="stats-chart-expand__link"
              onClick={this.getMoreData}
            >
              See More
            </button>
            <i className="fa fa-angle-down" />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
