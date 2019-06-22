import React, { Component } from "react";
import Grid from "./Grid";

class Charts extends Component {
  state = {
    total: 4000,
    limit: 9,
    perPage: 9,
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
      },
      {
        id: 10,
        name: "Dragana Zivkovic-Micunovic",
        data: 3545
      },
      {
        id: 11,
        name: "Nana Patarashvili",
        data: 3023
      },
      {
        id: 12,
        name: "Vanessa Hernandez",
        data: 2670
      },
      {
        id: 13,
        name: "Marina Fursiy",
        data: 2484
      },
      {
        id: 14,
        name: "Negrut Flori",
        data: 1980
      },
      {
        id: 15,
        name: "Bruce King",
        data: 1680
      },
      {
        id: 16,
        name: "Amanda Reynolds",
        data: 1205
      },
      {
        id: 17,
        name: "Hannah Graham",
        data: 654
      },
      {
        id: 18,
        name: "Amanda Reynolds",
        data: 520
      },
      {
        id: 19,
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

  getMoreUsers = () => {
    const { limit, perPage } = this.state;
    this.setState({ limit: limit + perPage });
  };

  render() {
    let { limit, data } = this.state;

    const newData = data.slice(0, limit);

    return (
      <div className="stats-new-container">
        <div className="container">
          <div className="stats-new-title text-center">{this.props.title}</div>
          <section id="chart__stats" className="stats-charts-container">
            {newData.length !== 0 ? (
              newData.map(({ id, name, data }) => {
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

            <Grid rows={newData.length} cols={10} steps={this.getGridSteps()} />
          </section>

          {newData.length < data.length ? (
            <div className="stats-chart-expand text-center">
              <button
                className="stats-chart-expand__link"
                onClick={this.getMoreUsers}
              >
                See More
              </button>
              <i className="fa fa-angle-down" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Charts;
