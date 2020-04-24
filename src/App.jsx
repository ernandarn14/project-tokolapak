import React from 'react';
import {Route, Swicth, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import ButtonUI from './views/components/Button/Button';

class App extends React.Component {
  render() {
  return (
    <div>
     <h1>App js</h1>
     <ButtonUI>button</ButtonUI>
     <ButtonUI type="outlined">button</ButtonUI>
     <ButtonUI type="textual">button</ButtonUI>
    </div>
  );
}
}

export default withRouter(App);
