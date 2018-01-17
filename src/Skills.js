import React, { Component } from 'react';

class Skills extends Component {
  render () {
    return (
      <div>
      <h4>2. Skills and location</h4>
      <hr/><br/>
      Which is your primary design discipline?*
      <br/><br/>
    <table>
      <tr id="buttons">
        <td>
          <label class="containerRadio">
          <input type="radio" name="button" value ="Design Research" id="firstButton" />
          <span class="checkmarkRadio"><div class="buttonText">Design Research</div></span>
        </label>
        </td>
          <td>
            <label class="containerRadio">
            <input type="radio" name="button" value = "Visual Design" id="middleButton" />
            <span class="checkmarkRadio"><div class="buttonText">Visual Design</div></span>
            </label>
          </td>
          <td>
            <label class="containerRadio">
            <input type="radio" name="button" value = "UX Design" id= "middleButton" />
            <span class="checkmarkRadio"><div class="buttonText">UX Design</div></span>
            </label>
          </td>
          <td>
            <label class="containerRadio">
            <input type="radio" name="button" value = "Front-end Dev" id= "endButton" />
            <span class="checkmarkRadio"><div class="buttonText">Front-end Dev</div></span>
            </label>
          </td>

      </tr>

    <tr id="questions">
      <td colspan="2">
        <br />
    Do you have experience with any other disciplines?
    </td>

    <td colspan="2" class="secondCol">
      <br />
    Where are you interested in working?*
    </td>
    </tr>

    <tr>
    <td colspan="2" id= "EmptyValid"> </td>
    <td colspan="2" id= "EmptyValid" class="secondCol"><small>You must be legally authorized to work without visa <br />sponsorship in the location(s) you choose.</small></td>
    </tr>

    <tr id="checkBoxes">
      <td colspan = "2" id="ExperienceTd">

      <label id="visual" class = "container" onmouseover="displayCross(crossVisual)" onmouseout="removeCross(crossVisual)">Visual Design
      <input type="checkbox" name="" value="Visual Design" />
      <span class="checkmark"></span> <span id= "crossVisual" onclick="deleteOption(visual)"></span>
    </label>

      <label id="UX" class = "container" onmouseover="displayCross(crossUX)" onmouseout="removeCross(crossUX)">UX Design
        <input type="checkbox" name="" value="UX Design" />
        <span class="checkmark"></span><span id= "crossUX" onclick="deleteOption(UX)"></span>
          </label>

      <label id="Front" class = "container" onmouseover="displayCross(crossFront)" onmouseout="removeCross(crossFront)">Front-end Development
        <input type="checkbox" name="" value="Front-end Development" />
        <span class="checkmark"></span><span id= "crossFront" onclick="deleteOption(Front)"></span>
          </label>

    </td>

    <td colspan = "2" class="secondCol">
      <br />

      <label id="Austin" class = "container" onmouseover="displayCross(crossAustin)" onmouseout="removeCross(crossAustin)">Austin, Texas
        <input type="checkbox" name="" label="Austin, Texas" />
        <span class="checkmark"></span><span id= "crossAustin" onclick="deleteOption(Austin)"></span>
          </label>

      <label id="NY" class = "container" onmouseover="displayCross(crossNY)" onmouseout="removeCross(crossNY)">New York, New York
        <input type="checkbox" name="" value="New York, New York" />
        <span class="checkmark"></span><span id= "crossNY" onclick="deleteOption(NY)"></span>
          </label>
      <label id="Toronto" class = "container" onmouseover="displayCross(crossToronto)" onmouseout="removeCross(crossToronto)">Toronto, Canada
        <input type="checkbox" name="" value="Toronto, Canada" />
        <span class="checkmark"></span><span id= "crossToronto" onclick="deleteOption(Toronto)"></span>
          </label>
      <label id="China" class = "container" onmouseover="displayCross(crossChina)" onmouseout="removeCross(crossChina)">Shanghai, China
        <input type="checkbox" name="" value="Shanghai, China" />
        <span class="checkmark"></span><span id= "crossChina" onclick="deleteOption(China)"></span>
          </label>
      <label id="Ireland" class = "container" onmouseover="displayCross(crossIreland)" onmouseout="removeCross(crossIreland)">Dublin, Ireland
        <input type="checkbox" name="" value="Dublin, Ireland" />
        <span class="checkmark"></span><span id= "crossIreland" onclick="deleteOption(Ireland)"></span>
          </label>
      <label id="UK" class = "container" onmouseover="displayCross(crossUK)" onmouseout="removeCross(crossUK)">Hursley, United Kingdom
        <input type="checkbox" name="" value="Hursley, United Kingdom" />
        <span class="checkmark"></span><span id= "crossUK" onclick="deleteOption(UK)"></span>
          </label>
      <label id="Germany" class = "container" onmouseover="displayCross(crossGermany)" onmouseout="removeCross(crossGermany)">Boeblingen, Germany
        <input type="checkbox" name="" value="Boeblingen, Germany" />
        <span class="checkmark"></span><span id= "crossGermany" onclick="deleteOption(Germany)"></span>
          </label>
      <label id="Else" class = "container" onmouseover="displayCross(crossElse)" onmouseout="removeCross(crossElse)">Somewhere else
        <input type="checkbox" name="" value="Somewhere else" />
        <span class="checkmark"></span><span id= "crossElse" onclick="deleteOption(Else)"></span>
      </label>

      </td>
    </tr>


    <tr id="Add">
      <td><input type="text" name="" id="addValue" /></td>
      <td><input type="button" name="" value="Add Experience" onclick="addExperience()" /></td>

      <td colspand="2"></td>
    </tr>

    </table>
    </div>

  )
  }
}

export default Skills;
