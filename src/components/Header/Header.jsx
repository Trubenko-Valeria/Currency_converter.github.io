// import logo from './logo.png';
import { Component } from "react";
import "../css/Header.css";
import image from "../img/logo.png";

import Data from "../Data/Data";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__top">
          <div className="header__top__logo">
            <img src={image} alt="Image logo" height="50" width="50" />
            <p className="header__top__logo__text">
              Cu<span className="header__top__logo__text__span">Rex</span>Ua
            </p>
          </div>
          <Data />
        </div>
        
        <h1 className="header__title">Current exchange rate</h1>
        <div className="header__table">
          <table className="header__table__currency">
            <thead>
              <tr>
                <th>Currency</th>
                <th>Purchase</th>
                <th>Selling</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>USD</td>
                <td>37,650</td>
                <td>38,350</td>
              </tr>
              <tr>
                <td>EUR</td>
                <td>40,500</td>
                <td>41,100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Header;
