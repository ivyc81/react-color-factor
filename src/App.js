import React, { Component } from 'react';
import Routers from './Routers';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        colors: {red: 'red'},
    }
    this.addColor = this.addColor.bind(this);
  }

  addColor(color) {
    const newColors = {...this.state.colors, [color.colorText]: color.color};
    this.setState({colors: newColors});
  }

  render() {
    return (
      <div className="App">
        <Routers colorData={ this.state.colors } triggerAddColor={ this.addColor }/>
      </div>
    );
  }
}

export default App;
