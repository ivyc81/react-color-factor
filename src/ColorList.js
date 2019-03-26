import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './ColorList.css';

class ColorList extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         colors: {},
    //     }
    // }
  render() {
      const colorLinks = Object.keys(this.props.colorData).map((color) => <li key={color}><Link key={color} to={`/colors/${color}`}>{color}</Link></li>);
    return (
      <div className="ColorList">
        <ul>
            { colorLinks }
        </ul>
      </div>
    );
  }
}

export default ColorList;