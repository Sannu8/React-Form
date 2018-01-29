import React, { Component } from 'react';
import './CheckBox.css';

class CheckBox extends Component {


  render () {

    const data = this.props.data;

    return (
      <label className= "container">
        {data}
        <input type="checkbox" name="" value={data} />
        <span className="checkmark"></span>
      <span onClick={(e) => this.props.delete(e, data)} className="Delete"> Delete</span>
      </label>
    )
  }
}

export default CheckBox;
