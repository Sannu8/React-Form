import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div>
      <h4>1. Personal information</h4>
      <hr />
      <br /><br />
      <input type="text" name="" placeholder="Full name*" pattern="[A-Za-z]{2,}" title="Only accepts Alphabets(Capital or small for now. Minimum number of characters 2. Please Enter a Valid FullName. For Eg: Sandhya Mahat)"class = "floatLeft" required />
      <input type="tel" name="" placeholder="Phone#*" pattern="[+]358[0-9]{9}" title="Please insert your phone number with the country code. For eg: +358404178995"class = "floatRight" required /><br /><br />
      <input type="email" name="" placeholder="Email*" id="email" required /><br /><br />
      <input type="email" name="" placeholder="Re-enter email*" id="confirm" onkeyup="checkEmail()" required /><span id="emailMessage"></span>
      <br /><br />
      <br />
      <input type="text" rows = '2' name="" placeholder="Address*" pattern="" required /><br /><br />
    <hr class="greyHr" />
      <br/>
      <input type="text" name="" placeholder="City*" pattern="[a-z]{2,}" class='location' required />
      <input type="text" name="" placeholder="State" pattern="" class='location' />
      <input type="text" name="" placeholder="Country/Region*" pattern="[a-z]{2,}" class='location' required />
      <input type="text" name="" placeholder="Zip/Postal code" pattern="[0-9]{5}" class='locationend' /><br /><br /><br />
      <input type="text" name="" pattern="" placeholder="How did you hear about us" />
      </div>
    )
  }
}

export default Info; 
