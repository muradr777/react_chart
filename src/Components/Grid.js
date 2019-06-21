import React, { Component } from "react";

class Grid extends Component {
  render() {
    const { rows, cols, steps } = this.props;
    return (
      <section id="stats-chart1" className="stats-charts-grid">
        {[...Array(rows)].map((e, iy) => {
          return (
            <div key={iy} className="stats__grid__row">
              {[...Array(cols)].map((e, ix) => {
                return (
                  <div key={ix} className="s__grid__block">
                    <span>{iy === rows - 1 ? steps[ix] : ""}</span>
                    {iy === rows - 1 && ix === cols - 1 ? (
                      <em>{steps[steps.length - 1]}</em>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    );
  }
}

export default Grid;
