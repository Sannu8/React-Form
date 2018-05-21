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

	handleFocus = () => {
		this.setState({
			errorText: ""
		});
	};

	validate = (inputId, value, confirmError) => {
		if (
			inputId === "fullname" &&
			!value.match(/^([A-ZÄÖÅ][a-zåäö'?.?]{1,}\s?){2,}$/)
		) {
			this.setState({
				fullNameTouched: "touched",
				errorText: "Valid FullName is required. For eg: Sanna Lindström!",
				fullNameError: true
			});
		} else if (
			inputId === "tel" &&
			!value.match(/(^[+]358[0-9]{9}$)|(^0[0-9]{9}$)/)
		) {
			this.setState({
				telTouched: "touched",
				errorText:
					"Valid Phone Number is required. For eg: +358505189559 or 0404189449!",
				telError: true
			});
		} else if (
			inputId === "email" &&
			!value.match(/^[a-zöåä0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
		) {
			this.setState({
				emailTouched: "touched",
				errorText:
					"Valid Email Address is required. For eg: sanna.lindstrom@gmail.com!",
				emailError: true
			});
		} else if (
			inputId === "confirm" &&
			(!value.match(/^[a-zöåä0-9.-_%+]+@[a-z0-9.-]+\.[a-z]{2,4}$/) ||
				confirmError === true)
		) {
			this.setState({
				reEmailTouched: "touched",
				errorText: "Re-entered email-address is invalid!",
				reEmailError: true
			});
		} else if (
			inputId === "address" &&
			!value.match(/^([A-ZÅÖÄa-zåäö0-9,?.?-?]{1,}\s?){2,}/)
		) {
			this.setState({
				addressTouched: "touched",
				errorText: "Valid Address is required!",
				addressError: true
			});
		} else if (
			inputId === "city" &&
			!value.match(/^([A-ZÅÄÖa-zåäö]{1,}\s?){1,}$/)
		) {
			this.setState({
				cityTouched: "touched",
				errorText: "Valid City is required!",
				cityError: true
			});
		} else if (
			inputId === "state" &&
			value !== "" &&
			!value.match(/^([A-ZÅÄÖa-zåäö]{1,}\s?){1,}$/)
		) {
			this.setState({
				statesTouched: "touched",
				errorText: "Please Enter a Valid State or Leave it Blank!",
				statesError: true
			});
		} else if (
			inputId === "zip" &&
			value !== "" &&
			!value.match(/^[0-9]{5}$/)
		) {
			this.setState({
				zipTouched: "touched",
				errorText:
					"Please enter a valid Zip/Postal Code or Leave It Blank. For eg: 34142!",
				zipError: true
			});
		} else if (
			inputId === "country" &&
			!value.match(/^([A-ZÅÄÖa-zåäö]{1,}\s?){1,}$/)
		) {
			this.setState({
				countryTouched: "touched",
				errorText: "Valid Country is required!",
				countryError: true
			});
		} else if (
			inputId === "how" &&
			value !== "" &&
			!value.match(/^([A-Za-zÅÄÖåäö,.]\s?){3,}$/)
		) {
			this.setState({
				howTouched: "touched",
				errorText: "Please Enter Valid Data or Leave it Blank!",
				howError: true
			});
		} else if (inputId === "inputExperience" && value !== "") {
			this.setState({
				inputExperienceTouched: "touched",
				errorText:
					"Please Click the 'Add Experience' Button to add your skill!",
				inputExperienceError: true
			});
			ReactDOM.findDOMNode(this).scrollIntoView();
		} else if (
			inputId === "portfolio" &&
			!value.match(
				/^(www.|https?:\/\/(www.)?)[a-z0-9]+\.[a-z]{2,4}(\/\/[a-z0-9])*$/
			)
		) {
			this.setState({
				portfolioTouched: "touched",
				errorText: "Valid PortFolio Link Is Required!",
				portfolioError: true
			});
			ReactDOM.findDOMNode(this).scrollIntoView();
		} else {
			this.setState({
				fullNameError: false,
				telError: false,
				emailError: false,
				reEmailError: false,
				addressError: false,
				cityError: false,
				statesError: false,
				countryError: false,
				zipError: false,
				howError: false,
				inputExperienceError: false,
				portfolioError: false
			});
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
		if (errors.length === 0) {
			alert("thanks");
		} else
			for (var i = 0; i < errors.length; i++) {
				e.preventDefault();
				if (errors[i] === true) {
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
					handleFocus={this.handleFocus}
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
					handleFocus={this.handleFocus}
					validate={this.validate}
					inputExperienceTouched={this.state.inputExperienceTouched}
				/>
				<Portfolio
					handleFocus={this.handleFocus}
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
