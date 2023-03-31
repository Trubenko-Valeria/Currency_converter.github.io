// import logo from './logo.png';
import { Component } from "react";
import "./components/css/App.css";

import Header from "./components/Header/Header";
import Conversion from "./components/Conversion/Conversion";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currencyRate: {},
    };
    this.currecy = ["uah", "usd", "eur"];
    this.getRate();
  }

  // I use the property fetch() to read the link

  getRate = () => {
    const newData = new Date();
    const todayData =
      newData.getFullYear() +
      "-" +
      ("0" + (newData.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + newData.getDate()).slice(-2);
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${todayData}/currencies/uah.json`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.currecy.length; i++) {
          result[this.currecy[i]] = data.uah[this.currecy[i]];
        }
        this.setState({ currencyRate: result });
      });
  };

  render() {
    const { date, currencyRate } = this.state;
    return (
      <div className="App">
        <Header date={date} currencyRate={currencyRate} />
        <Conversion currencyRate={currencyRate} />
      </div>
    );
  }
}

export default App;
