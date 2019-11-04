import React from 'react';

import Routes from "./routes";

import Header from './components/Header'

import './styles.css'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
