import React, { Component } from 'react';

import Radio from './Radio.js';
import CheckBox from './CheckBox.js';




class Skills extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputExperience : '',
      exDatas: ['Visual Design', 'UX Design', 'Front-end Development'],
      cityDatas : ['Austin, Texas','New York, New York', 'Toronto, Canada','Shanghai, China', 'Dublin, Ireland', 'Hursley, UK','Boeblingen, Germany','Somewhere Else'],

    }
  }

  handleDelete = (e, element) => {
    console.log('delete');
    const newExDatas = Object.assign([], this.state.exDatas).filter(e => e!==element);
    const newCityDatas = Object.assign([], this.state.cityDatas).filter(e => e!==element);

    console.log(newExDatas, newCityDatas);

    this.setState({
      exDatas : newExDatas,
      cityDatas : newCityDatas

    });
  }


  handleAdd = (valueEx) => {

    const newExDatas = Object.assign([], this.state.exDatas).concat(valueEx);

   this.setState({exDatas : newExDatas})

  }

  render () {
    const radioids = ['firstButton','middleButton', 'middleButton', 'endButton'];
    const radiodatas = ['Design Research', 'Visual Design', 'UX Design', 'Front-end Dev'];






    return (
      <form>
      <h4>2. Skills and location</h4>
      <hr/><br/>
      Which is your primary design discipline?*
      <br/><br/>
    <table>
      <tbody>
      <tr id="buttons">
        {radioids.map((id, data) =>   <Radio data ={radiodatas[data]} id={id}/>)}

      </tr>

    <tr id="questions">
      <td colSpan="2">
        <br />
    Do you have experience with any other disciplines?
    </td>

    <td colSpan="2" className="secondCol">
      <br />
    Where are you interested in working?*
    </td>
    </tr>

    <tr>
    <td colSpan="2" id= "EmptyValid"> </td>
    <td colSpan="2" id= "EmptyValid" className="secondCol">
      <small>
        You must be legally authorized to work without visa
        <br />
        sponsorship in the location(s) you choose.
      </small>
    </td>
    </tr>

    <tr id="checkBoxes">
      <td colSpan = "2" id="ExperienceTd">

      {this.state.exDatas.map((i, data) => <CheckBox data={this.state.exDatas[data]} delete={this.handleDelete}/>)}

    </td>

    <td colSpan = "2" className="secondCol">
      <br />
      {this.state.cityDatas.map((i, data) => <CheckBox data={this.state.cityDatas[data]} delete={this.handleDelete}/>)}


      </td>
    </tr>


    <tr id="Add">
      <td>
        <input type="text" value={this.state.inputExperience} onChange={(e) => this.setState({inputExperience : e.target.value})} />
      </td>
      <td>
        <input type="button" value="Add Experience" onClick={() => this.handleAdd(this.state.inputExperience )} />
      </td>

      <td colSpan="2"></td>
    </tr>
    </tbody>
    </table>
    </form>

  )
  }
}

export default Skills;
