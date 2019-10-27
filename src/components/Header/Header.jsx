import React from 'react';
import headerImg from '../../assets/images/car.png';
import searchIcon from '../../assets/images/searchIcon.svg';
import userIcon from '../../assets/images/userIcon.svg';

import './Header.scss';

const header = () => (
  <header className="header">
    <div className="header__upper-block container">
      <div className="header__logo" title="Back to Starting Page">
        <img className="header__img" src={headerImg} alt="car" />
        <span className="header__title">
          TRIPF
        </span>
      </div>
      <div className="header__search">
        <form>
          <label htmlFor="search-bar">
            <input
              className="header__search-input"
              type="text"
              id="header__search-bar"
              placeholder="Fast search for trip..."
              title="Please fill out this field"
            />
            <button className="header__search-button" type="submit" title="Start your search">
              <img className="header__search-icon" src={searchIcon} alt="search icon" />
            </button>
          </label>
        </form>
      </div>
      <button className="header__user-button" type="button" title="Login/Logout">
        <img className="header__user-icon" src={userIcon} alt="user icon" />
      </button>
    </div>
    <nav className="header__navigation">
      <div className="container">
        <a className="header__link" href="/">Search trip</a>
        <a className="header__link" href="/">Favorites</a>
        <a className="header__link" href="/">About us</a>
        <a className="header__link" href="/">Contacts</a>
      </div>
    </nav>
  </header>
);

export default header;
