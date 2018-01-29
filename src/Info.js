import React, { Component } from 'react';

class Info extends Component {
  constructor(props){
    super(props);

    this.state = {
      fullName: '',
      fullNameError: '',
      phone: '',
      phoneError: '',
      email: '',
      emailError: '',
      reemail: '',
      address: '',
      addressError: '',
      city: '',
      cityError: '',
      states: '',
      statesError: '',
      zip: '',
      zipError: '',
      country: '',
      countryError: '',
      how: '',
      howError: ''
    }
  }

  validate = () => {
    let isError = false;

    const errors = {
      fullNameError: '',
      phoneError: '',
      emailError: '',
      addressError: '',
      cityError: '',
      statesError: '',
      zipError: '',
      countryError: '',
      howError: ''
    };

    const message = {
      successAdd: "Your data has successfully been added!"
    };

    if(!this.state.fullName.match()) {
      isError = true;
      errors.fullNameError = 'Valid FullName is required.';

      this.setState({
        fullName: ''
      })
    }

    else if (!this.state.phone.match()) {
      isError = true;
      errors.phoneError = 'Valid phoneNumber is required.';

      this.setState({
        phone: ''
      })
    }

    else if (!this.state.email.match()) {
      isError = true;
      errors.emailError = 'Valid email address is required';

      this.setState({
        email: ''
      })
    }

    else if (!this.state.address.match()) {
      isError = true;
      errors.AddressError = 'Valid Address is required';

      this.setState({
        address: ''
      })
    }

    else if (!this.state.city.match()) {
      isError = true;
      errors.cityError = 'Valid City is required';

      this.setState({
        city: ''
      })
    }

    else if (!this.state.states.match()) {
      isError = true;
      errors.statesError = 'Valid Address is required';

      this.setState({
        states: ''
      })
    }

    else if (!this.state.zip.match()) {
      isError = true;
      errors.zipError = 'Valid Address is required';

      this.setState({
        zip: ''
      })
    }

    else if (!this.state.country.match()) {
      isError = true;
      errors.countryError = 'Valid Address is required';

      this.setState({
        country: ''
      })
    }

    else if (!this.state.how.match()) {
      isError = true;
      errors.howError = 'Valid Address is required';

      this.setState({
        how: ''
      })
    }

    else {
      this.setState({
        successAdd: "Your data has been successfully added!",
        fullName: '',
        fullNameError: '',
        phone: '',
        phoneError: '',
        email: '',
        emailError: '',
        reemail: '',
        address: '',
        addressError: '',
        city: '',
        cityError: '',
        states: '',
        statesError: '',
        zip: '',
        zipError: '',
        country: '',
        countryError: '',
        how: '',
        howError: ''
      });
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;

  };

  checkEmail() {
    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;
    var emailMessage = document.getElementById("emailMessage");
    if (email === confirm) {
      emailMessage.style.color = "LightGreen";
      emailMessage.innerHTML = " Emails successfully match!!";
    }
    else {
      emailMessage.style.color = "Red";
      emailMessage.innerHTML = " Emails do not match!!";
    }
  }

  render() {
    return (
      <form>
      <h4>1. Personal information</h4>
      <hr />
      <br /><br />
      <input
        type="text"
        name=""
        placeholder="Full name*"
        pattern="[A-Za-z]{2,}"
        title="Only accepts Alphabets(Capital or small for now. Minimum number of characters 2. Please Enter a Valid FullName. For Eg: Sandhya Mahat)"
        className= "floatLeft"
        value={this.state.fullName}
        onChange = {(e) => this.setState({fullName: e.target.value})}
        onMouseOut = {this.validate}
        required />

      <input
        type="tel"
        name=""
        placeholder="Phone#*"
        pattern="[+]358[0-9]{9}"
        title="Please insert your phone number with the country code. For eg: +358404178995"
        className = "floatRight"
        value={this.state.phone}
        onChange={(e) => this.setState({phone: e.target.value})}
        required />
        <br /><br />

      <input
        type="email"
        name=""
        placeholder="Email*"
        id="email"
        value={this.state.email}
        onChange={(e) => this.setState({email: e.target.value})}
        required />
        <br /><br />

      <input
        type="email"
        name=""
        placeholder="Re-enter email*"
        id="confirm"
        onKeyUp={this.checkEmail}
        value={this.state.reemail}
        onChange={(e)=> this.setState({reemail: e.target.value})}
        required />
        <span id="emailMessage"></span>
      <br /><br />

      <br />
      <input
        type="text"
        rows = '2'
        name=""
        placeholder="Address*"
        pattern=""
        value={this.state.address}
        onChange={(e)=> this.setState({address: e.target.value})}
        required /><br /><br />

    <hr className="greyHr" />
      <br/>
      <input
        type="text"
        name=""
        placeholder="City*"
        pattern="[a-z]{2,}"
        className='location'
        value={this.state.city}
        onChange={(e)=> this.setState({city: e.target.value})}
        required />

      <input
      type="text"
      name=""
      placeholder="State"
      pattern=""
      className='location'
      value={this.state.states}
      onChange={(e)=> this.setState({states: e.target.value})} />

      <input
      type="text"
      name=""
      placeholder="Country/Region*"
      pattern="[a-z]{2,}"
      className='location'
      value={this.state.country}
      onChange={(e)=> this.setState({country: e.target.value})}
      required />

      <input
        type="text"
        name=""
        placeholder="Zip/Postal code"
        pattern="[0-9]{5}"
        className='locationend'
        value={this.state.zip}
        onChange={(e)=> this.setState({zip: e.target.value})} />

        <br /><br /><br />

      <input
        type="text"
        name=""
        pattern=""
        placeholder="How did you hear about us"
        value={this.state.how}
        onChange={(e)=> this.setState({how: e.target.value})}/>
      </form>
    )
  }
}

export default Info;
