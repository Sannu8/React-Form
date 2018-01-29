import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Radio extends Component {
  render() {
    const data = this.props.data;
    
    return (
      <td>
        <label className="containerRadio">
        <input type="radio" name="button" value ={data} id={this.props.id} />
        <span className="checkmarkRadio"><div className="buttonText">{data}</div></span>
      </label>
      </td>
    )
  }
}

export default Radio;
