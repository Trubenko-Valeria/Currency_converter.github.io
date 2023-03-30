// import logo from './logo.png';
import { Component } from "react";
import "./components/css/App.css";

import Header from "./components/Header/Header";
import Conversion from "./components/Conversion/Conversion";

class App extends Component {
  constructor(props) {
    super(props);
    this.getRate();
  }

  getRate = () => { 

    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/uah.json"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("DATA", data);
      });
  }

    render() {
      return (
        <div className="App">
          <Header />
          <Conversion />
        </div>
      );
    }
  }

export default App;
