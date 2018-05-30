import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Css/App.css";

import Header from "./Header";
import Info from "./Info.js";
import Skills from "./Skills.js";
import Portfolio from "./Portfolio.js";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			errorText: "",
			errorColor: "Red"
		};
	}

	validate = (inputId, value, confirmError) => {
		if (inputId === "fullname") {
			if (!value.match(/^([A-ZÄÖÅ][a-zåäö'?.?]{1,}\s?){2,}$/)) {
				this.setState({
					fullNameTouched: "invalid",
					errorText: "Valid FullName is required. For eg: Sanna Lindström!",
					fullNameError: true
				});
			} else {
				this.setState({
					fullNameError: false,
					fullNameTouched: "",
					errorText: ""
				});
			}
		} else if (inputId === "tel") {
			if (!value.match(/(^[+]358[0-9]{9}$)|(^0[0-9]{9}$)/)) {
				this.setState({
					telTouched: "invalid",
					errorText:
						"Valid Phone Number is required. For eg: +358505189559 or 0404189449!",
					telError: true
				});
			} else {
				this.setState({
					telError: false,
					telTouched: "",
					errorText: ""
				});
			}
		} else if (inputId === "email") {
			if (!value.match(/^[a-zöåä0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
				this.setState({
					emailTouched: "invalid",
					errorText:
						"Valid Email Address is required. For eg: sanna.lindstrom@gmail.com!",
					emailError: true
				});
			} else if (confirmError === true) {
				this.setState({
					reEmailTouched: "invalid",
					errorText: "Please make sure that the email addresses match!",
					reEmailError: true,
					emailError: false,
					emailTouched: ""
				});
			} else if (confirmError === false) {
				this.setState({
					reEmailTouched: "",
					errorText: "",
					reEmailError: false,
					emailError: false,
					emailTouched: ""
				});
			}
		} else if (inputId === "confirm") {
			if (
				!value.match(/^[a-zöåä0-9.-_%+]+@[a-z0-9.-]+\.[a-z]{2,4}$/) ||
				confirmError === true
			) {
				this.setState({
					reEmailTouched: "invalid",
					errorText: "Re-entered email-address is invalid!",
					reEmailError: true
				});
			} else {
				this.setState({
					reEmailError: false,
					reEmailTouched: "",
					errorText: ""
				});
			}
		} else if (inputId === "address") {
			if (!value.match(/^([A-ZÅÖÄa-zåäö0-9,?.?-?]{1,}\s?){2,}/)) {
				this.setState({
					addressTouched: "invalid",
					errorText: "Valid Address is required!",
					addressError: true
				});
			} else {
				this.setState({
					addressError: false,
					addressTouched: "",
					errorText: ""
				});
			}
		} else if (inputId === "city") {
			if (!value.match(/^([A-ZÅÄÖa-zåäö]{1,}\s?){1,}$/)) {
				this.setState({
					cityTouched: "invalid",
					errorText: "Valid City is required!",
					cityError: true
				});
			} else {
				this.setState({
					cityError: false,
					cityTouched: "",
					errorText: ""
				});
			}
		} else if (inputId === "state") {
			if (value !== "" && !value.match(/^([A-ZÅÄÖa-zåäö]{1,}\s?){1,}$/)) {
				this.setState({
					statesTouched: "invalid",
					errorText: "Please Enter a Valid State or Leave it Blank!",
					statesError: true
				});
			} else {
				this.setState({
					statesError: false,
					statesTouched: "",
					errorText: ""
				});
			}
		} else if (inputId === "zip") {
			if (value !== "" && !value.match(/^[0-9]{5}$/)) {
				this.setState({
					zipTouched: "invalid",
					errorText:
						"Please enter a valid Zip/Postal Code or Leave It Blank. For eg: 34142!",
					zipError: true
				});
			} else {
				this.setState({
					zipError: false,
					zipTouched: "",
					errorText: ""
				});
			}
		} else if (inputId === "country") {
			if (!value.match(/^([A-ZÅÄÖa-zåäö]{1,}\s?){1,}$/)) {
				this.setState({
					countryTouched: "invalid",
					errorText: "Valid Country is required!",
					countryError: true
				});
			} else {
				this.setState({
					countryError: false,
					countryTouched: "",
					errorText: ""
				});
			}
		} else if (inputId === "how") {
			if (value !== "" && !value.match(/^([A-Za-zÅÄÖåäö,.]\s?){3,}$/)) {
				this.setState({
					howTouched: "invalid",
					errorText: "Please Enter Valid Data or Leave it Blank!",
					howError: true
				});
			} else {
				this.setState({
					howError: false,
					howTouched: "",
					errorText: ""
				});
			}
		} else if (inputId === "inputExperience") {
			if (value !== "") {
				this.setState({
					inputExperienceTouched: "invalid",
					errorText:
						"Please Click the 'Add Experience' Button to add your skill!",
					inputExperienceError: true
				});
				ReactDOM.findDOMNode(this).scrollIntoView();
			} else {
				this.setState({
					inputExperienceError: false,
					inputExperienceTouched: "",
					errorText: ""
				});
			}
		} else if (inputId === "portfolio") {
			if (
				!value.match(
					/^(www.|https?:\/\/(www.)?)[a-z0-9]+\.[a-z]{2,4}(\/\/[a-z0-9])*$/
				)
			) {
				this.setState({
					portfolioTouched: "invalid",
					errorText: "Valid PortFolio Link Is Required!",
					portfolioError: true
				});
				ReactDOM.findDOMNode(this).scrollIntoView();
			} else {
				this.setState({
					portfolioError: false,
					portfolioTouched: "",
					errorText: ""
				});
			}
		}
	};

	handleSubmit = e => {
		let errors = [
			this.state.fullNameError,
			this.state.telError,
			this.state.emailError,
			this.state.reEmailError,
			this.state.addressError,
			this.state.cityError,
			this.state.statesError,
			this.state.countryError,
			this.state.zipError,
			this.state.howError,
			this.state.inputExperienceError,
			this.state.portfolioError
		];

		for (var i = 0; i < errors.length; i++) {
			if (errors[i] === true) {
				e.preventDefault();
				this.setState({
					errorText: "Please check for errors in the form",
					errorColor: "Red"
				});
				ReactDOM.findDOMNode(this).scrollIntoView();
			}
		}
	};

	render() {
		return (
			<form>
				<Header />
				<Info
					validate={this.validate}
					errorText={this.state.errorText}
					errorColor={this.state.errorColor}
					fullNameTouched={this.state.fullNameTouched}
					telTouched={this.state.telTouched}
					emailTouched={this.state.emailTouched}
					reEmailTouched={this.state.reEmailTouched}
					addressTouched={this.state.addressTouched}
					cityTouched={this.state.cityTouched}
					statesTouched={this.state.statesTouched}
					countryTouched={this.state.countryTouched}
					zipTouched={this.state.zipTouched}
					howTouched={this.state.howTouched}
					confirmError={this.state.confirmError}
				/>
				<Skills
					validate={this.validate}
					inputExperienceTouched={this.state.inputExperienceTouched}
				/>
				<Portfolio
					validate={this.validate}
					portfolioTouched={this.state.portfolioTouched}
				/>
				<input
					type="submit"
					name=""
					value="Submit"
					className="submit"
					onClick={e => this.handleSubmit(e)}
				/>
			</form>
		);
	}
}

export default App;
