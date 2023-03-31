// import logo from './logo.png';
import { Component } from "react";
import { useState } from "react";
import "../css/Conversion.css";

class Conversion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      value: 0,
      name: "uah",
    };
  }

  // static getStateFromProps(props, state) {
  //   return { currencyRate: props.currencyRate };
  // }

  calcConv = (e) => {
    e.preventDefault();

    let elements = e.target.elements;
    console.log("EEE", elements);
    console.log("CCC", this.props.currencyRate[this.state.name]);
    this.setState({ result: this.state.value / this.props.currencyRate[this.state.name] });
    
  };

  valueConv = (event) => {
    this.setState({ value: event.target.value });
    const value = event.target.value;
    console.log("Val", value);
  };

  nameConv = (event) => {
    this.setState({ name: event.target.value });
    const name = event.target.value;
    console.log("Val", name);
  };

  render() {
    const { currencyRate } = this.props;
    return (
      <div className="head">
        <hr></hr>
        <h1 className="head__title">Currency conversion</h1>
        <div className="head__block">
          <form onSubmit={this.calcConv} className="head__block__wrapper">
            <label className="head__block__wrapper__label" htmlFor="numb_1">
              Exchange
            </label>
            <input
              className="head__block__wrapper__input"
              type="number"
              id="numb_1"
              placeholder="Enter the amount"
              value={this.state.value}
              onChange={this.valueConv}
              name='count-currency'
              // onChange={(e) => setInput(e.target.value)}
            ></input>
            {/*  value={this.state.value}
            onChange={this.handleChange} */}
            <select
              className="head__block__wrapper__select"
              onChange={this.nameConv}
            >
              <option>UAH</option>
              {Object.keys(currencyRate).map((keyName, i) => (
                <option
                  className="text__uppercase"
                  key={keyName}
                  value={keyName}
                >
                  {keyName.toUpperCase()}
                </option>
              ))}
            </select>
            {this.state.result}
          </form>
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
