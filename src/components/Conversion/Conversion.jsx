// import logo from './logo.png';
import { Component } from "react";
import {useState} from 'react';
import "../css/Conversion.css";

class Conversion extends Component {

  render() {
    return (
      <div className="head">
        <hr></hr>
        <h1 className="head__title">Currency conversion</h1>
        <div className="head__block">
          <div className="head__block__wrapper">
            <label className="head__block__wrapper__label" htmlFor="numb_1">
              Exchange
            </label>
            <input
              className="head__block__wrapper__input"
              type="number"
              id="numb_1"
              placeholder="Enter the amount"
              // onChange={(e) => setInput(e.target.value)}
            ></input>
            {/* <select
              className="head__block__wrapper__select"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option defaultValue="value1" selected>
                USD
              </option>
              <option defaultValue="value2">UAH</option>
              <option defaultValue="value3">EUR</option>
            </select> */}
          </div>
          <div className="head__block__wrapper">
            <label className="head__block__wrapper__label" htmlFor="numb_2">
              Receive
            </label>
            <input
              className="head__block__wrapper__input"
              type="number"
              id="numb_2"
              placeholder="Enter the amount"
              // onChange={(e) => setInput(e.target.value)}
            ></input>
            {/* <select
              className="head__block__wrapper__select"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option defaultValue="value1" selected>
                USD
              </option>
              <option defaultValue="value2">UAH</option>
              <option defaultValue="value3">EUR</option>
            </select> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Conversion;
