// import logo from './logo.png';
import { Component } from "react";
import "../css/Conversion.css";

class Conversion extends Component {
  state = {
      value_1: 0,
      value_2: 0,
      currency_1: "uah",
      currency_2: "uah",
    };
  constructor(props) {
    super(props);
  }

  // static getStateFromProps(props, state) {
  //   return { currencyRate: props.currencyRate };
  // }

  convChange = (event) => {
    const Change = event.target;
    const valueChange = Change.value;
    const nameChange = Change.name;
    this.setState({ [nameChange]: valueChange });
  };

  calcConv_1 = (e) => {
    e.preventDefault();
    const { currency_1, currency_2, value_1 } = this.state;
    const { currencyRate } = this.props;
    if (currency_1 == currency_2) {
      this.setState({
        value_2: value_1,
      });
    } else if (currency_1 == "uah") {
      this.setState({
        value_2: value_1 * currencyRate[currency_2],
      });
    } else if (currency_1 == "usd" || currency_1 == "eur") {
      if (currency_2 == "uah") {
        this.setState({
          value_2: value_1 / currencyRate[currency_1],
        });
      } else {
        this.setState({
          value_2:
            (value_1 / currencyRate[currency_1]) * currencyRate[currency_2],
        });
      }
    }
  };

  calcConv_2 = (e) => {
    e.preventDefault();
    const { currency_1, currency_2, value_2 } = this.state;
    const { currencyRate } = this.props;
    if (currency_2 == currency_1) {
      this.setState({
        value_1: value_2,
      });
    } else if (currency_2 == "uah") {
      this.setState({
        value_1: value_2 * currencyRate[currency_1],
      });
    } else if (currency_2 == "usd" || currency_2 == "eur") {
      if (currency_1 == "uah") {
        this.setState({
          value_1: value_2 / currencyRate[currency_2],
        });
      } else {
        this.setState({
          value_1:
            (value_2 / currencyRate[currency_2]) * currencyRate[currency_1],
        });
      }
    }
  };

  render() {
    const { currencyRate } = this.props;
    return (
      <div className="head">
        <hr></hr>
        <h1 className="head__title">Currency conversion</h1>
        <p>Please, press enter after entering the amount to confirm</p>
        <div className="head__block">
          <form onSubmit={this.calcConv_1} className="head__block__wrapper">
            <label className="head__block__wrapper__label" htmlFor="numb_1">
              Exchange
            </label>
            <input
              className="head__block__wrapper__input"
              type="number"
              id="numb_1"
              placeholder="Enter the amount"
              value={this.state.value_1}
              onChange={this.convChange}
              name="value_1"
            ></input>
            <select
              className="head__block__wrapper__select"
              onChange={this.convChange}
              name="currency_1"
            >
              {Object.keys(currencyRate).map((keyName) => (
                <option
                  className="text__uppercase"
                  key={keyName}
                  value={keyName}
                >
                  {keyName.toUpperCase()}
                </option>
              ))}
            </select>
          </form>

          <form onSubmit={this.calcConv_2} className="head__block__wrapper">
            <label className="head__block__wrapper__label" htmlFor="numb_2">
              Receive
            </label>
            <input
              className="head__block__wrapper__input"
              type="number"
              id="numb_2"
              placeholder="Enter the amount"
              value={this.state.value_2}
              onChange={this.convChange}
              name="value_2"
            ></input>
            <select
              className="head__block__wrapper__select"
              onChange={this.convChange}
              name="currency_2"
            >
              {Object.keys(currencyRate).map((keyName) => (
                <option
                  className="text__uppercase"
                  key={keyName}
                  value={keyName}
                >
                  {keyName.toUpperCase()}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default Conversion;
