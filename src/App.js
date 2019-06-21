import React from "react";
import Charts from "./Components/Charts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div>
        <Charts title="The world's highest-paid advisors in 2018/19 (in U.S. dollars)*" />
      </div>
    </div>
  );
}

export default App;
