// import logo from './logo.png';
import { Component } from "react";
import "../css/Header.css";
import image from "../img/logo.png";

// import Data from "../Data/Data";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { date, currencyRateSmall } = this.props;
    return (
      <div className="header">
        <div className="header__top">
          <div className="header__top__logo">
            <img src={image} alt="Image logo" height="50" width="50" />
            <p className="header__top__logo__text">
              Cu<span className="header__top__logo__text__span">Rex</span>Ua
            </p>
          </div>
          <div className="header__top__data">
            <p className="header__top__data__text">Today is: {date}</p>
          </div>
          {/* <Data /> */}
        </div>

        <h1 className="header__title">
          The official exchange rate of the UAH against foreign currencies for{" "}
          <br></br>
          {date}
        </h1>
        <div className="header__table">
          <table className="header__table__currency">
            <thead>
              <tr>
                <th>Currency</th>
                <th>Exchange rates</th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(currencyRateSmall).map((keyName, i) => (
                <tr key={keyName}>
                  <td className="text__uppercase">{keyName}</td>
                  <td>
                    {currencyRateSmall[keyName].toFixed(3)}*<br></br>* You can
                    be bought for 1 UAH
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Header;
