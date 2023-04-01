// import logo from './logo.png';
import { Component } from "react";
import "./components/css/App.css";

import Header from "./components/Header/Header";
import Conversion from "./components/Conversion/Conversion";

class App extends Component {
  state = {
    currencyRate: {},
    currencyRateSmall: {},
  };

  constructor(props) {
    super(props);
    this.currecy = ["uah", "usd", "eur"];
    this.getRate();
  }

  // I use the property fetch() to read the link

  getRate = () => {
    const newData = new Date();
    const apiData =
      newData.getFullYear() +
      "-" +
      ("0" + (newData.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + newData.getDate()).slice(-2);
    const dataToday =
      ("0" + newData.getDate()).slice(-2) +
      "." +
      ("0" + (newData.getMonth() + 1)).slice(-2) +
      "." +
      newData.getFullYear();
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${apiData}/currencies/uah.json`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        let result = {};
        let resultSmall = {};
        for (let i = 0; i < this.currecy.length; i++) {
          result[this.currecy[i]] = data.uah[this.currecy[i]];
        }
        this.setState({ currencyRate: result });
        for (let i = 1; i < this.currecy.length; i++) {
          resultSmall[this.currecy[i]] = data.uah[this.currecy[i]];
        }
        this.setState({ currencyRateSmall: resultSmall });
      });
    return dataToday;
  };

  render() {
    const { currencyRate, currencyRateSmall } = this.state;
    return (
      <div className="App">
        <Header date={this.getRate()} currencyRateSmall={currencyRateSmall} />
        <Conversion currencyRate={currencyRate} />
      </div>
    );
  }
}

export default App;
