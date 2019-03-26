import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './NewColorForm.css';

class NewColorForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: '',
            colorText: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.triggerAddColor(this.state);
        this.props.history.push('/colors');
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }

  render() {
    return (
      <div className="NewColorForm">
        <form onSubmit={ this.handleSubmit }>
            <label>color name</label>
            <input name='colorText' onChange={ this.handleChange } value={ this.state.colorText }/>
            <label>color</label>
            <input type='color' name='color' onChange={ this.handleChange } value={ this.state.color }/>
            <button>Add Color</button>
        </form>
      </div>
    );
  }
}

export default NewColorForm;