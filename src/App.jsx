// import logo from './logo.png';
import { Component } from "react";
import "./components/css/App.css";

import Header from "./components/Header/Header";
import Conversion from "./components/Conversion/Conversion";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.getRate();
  // }
  // getRate = () => {
  //   fetch("https://bank.gov.ua/NBU_Exchange/exchange?json", {
  //     mode: "no-cors",
  //   })
      // .then((data) => {
      //   return data.json;
      // })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };

  render() {
    return (
      <div className='App'>
        <Header />
        <Conversion />
      </div>
    );
  }
}

export default App;
