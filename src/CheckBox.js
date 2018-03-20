import React, { Component } from 'react';
import './CheckBox.css';

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked : false
    }
  }

  render () {

    const data = this.props.data;

    return (
      <label className= "container">
        {data}
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onClick={(e) => this.setState({isChecked: e.target.checked})}
           />
        <span className="checkmark"></span>
      <span onClick={(e) => this.props.delete(e, data)} className="Delete"> Delete</span>
      </label>
    )
  }
}

export default CheckBox;
