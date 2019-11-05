import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';

import './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <Banner />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
