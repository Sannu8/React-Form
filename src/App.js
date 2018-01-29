import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './Header';
import Button from './Button';
import Info from './Info.js';
import Skills from './Skills.js';
import Portfolio from './Portfolio.js';

class App extends Component {
  render() {
    return (
    <div>
    
    <BrowserRouter>
      <div>
      <Route path="/" component= {Header} />
      <Route path="/personal" component= {Info} />
      <Route path="/skills" component= {Skills} />
      <Route path="/portfolio" component= {Portfolio} />
      </div>
    </BrowserRouter>

    <table>
      <tbody>
        <tr>
        <Button title="Personal" />
        <Button title="Skills" />
        <Button title="Portfolio" />
        </tr>
      </tbody>
    </table>


    <Info />
    <Skills />
    <Portfolio />

    </div>
    );
  }
}

export default App;
