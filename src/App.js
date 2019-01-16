import React, { Component } from 'react';
// Com os routes é possível navegar na aplicação
import Routes from './routes';

import "./style.css";

import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
