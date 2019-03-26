import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Color.css';

class Color extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         colors: {},
    //     }
    // }
  render() {
      console.log(this.props.colorData)
    return (
      <div className="Color">
        <p>{this.props.colorData}</p>
      </div>
    );
  }
}

export default Color;