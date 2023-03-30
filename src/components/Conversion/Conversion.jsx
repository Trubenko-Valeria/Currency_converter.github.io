// import logo from './logo.png';
import { Component } from "react";
import "../css/Conversion.css";

class Conversion extends Component {
  render() {
    return (
      <div className="head">
        <hr></hr>
        <h1 className="head__title">Currency conversion</h1>
        <div className="head__block">
          <div className="head__block__wrapper">
            <label className="head__block__wrapper__label" for="numb_1">
              Exchange
            </label>
            <input
              className="head__block__wrapper__input"
              type="number"
              id="numb_1"
            ></input>
            <select className="head__block__wrapper__select">
              <option value="value1" selected>
                USD
              </option>
              <option value="value2">UAH</option>
              <option value="value3">EUR</option>
            </select>
          </div>
          <div className="head__block__wrapper">
            <label className="head__block__wrapper__label" for="numb_2">
              Receive
            </label>
            <input
              className="head__block__wrapper__input"
              type="number"
              id="numb_2"
            ></input>
            <select className="head__block__wrapper__select">
              <option value="value1" selected>
                USD
              </option>
              <option value="value2">UAH</option>
              <option value="value3">EUR</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Conversion;
