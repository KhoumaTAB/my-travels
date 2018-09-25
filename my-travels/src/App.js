import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travels.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Travel
          destination="Tokyo"
          country="Japan"
          photo="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg?w968"
          distance="9 601 km"
        />
        <Travel 
          destination="Los Angeles"
          country="United States of America"
          photo="http://www.office-tourisme-usa.com/sites/default/files/styles/large_fat/public/media/downtown.jpg?itok=rK8kVGkG"
          distance="9 136 km"
        />
      </div>
    );
  }
}
export default App;
