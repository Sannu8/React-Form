import React, { Component } from "react";
import "./Css/Info.css";

class Info extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullName: "",
			fullNameTouched: "",
			phone: "",
			phoneTouched: "",
			email: "",
			emailTouched: "",
			reEmail: "",
			reEmailTouched: "",
			address: "",
			addressTouched: "",
			city: "",
			cityTouched: "",
			states: "",
			statesTouched: "",
			zip: "",
			zipTouched: "",
			country: "",
			countryTouched: "",
			how: "",
			howTouched: "",
			emailMessage: "",
			messagecolor: "",
			errorText: ""
		};
	}

	validate(inputId) {
		let isError = false;

		console.log(inputId);
		if (
			inputId === "fullname" &&
			!this.state.fullName.match(/^([A-ZÄÖÅ][a-zåäö'?.?]{1,}\s?){2,}/)
		) {
			isError = true;

			this.setState({
				fullName: "",
				fullNameTouched: "touched",
				errorText: "Valid FullName is required. For eg: Sanna Lindström!"
			});
		} else if (
			inputId === "tel" &&
			!this.state.phone.match(/(^[+]358[0-9]{9}$)|(^0[0-9]{9}$)/)
		) {
			isError = true;
			this.setState({
				phone: "",
				phoneTouched: "touched",
				errorText:
					"Valid Phone Number is required. For eg: +358505189559 or 0404189449!"
			});
		} else if (
			inputId === "email" &&
			!this.state.email.match(/^[a-zöåä0-9.-_%+]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
		) {
			isError = true;

			this.setState({
				email: "",
				emailTouched: "touched",
				errorText:
					"Valid Email Address is required. For eg: sanna.lindstrom@gmail.com!"
			});
		} else if (
			inputId === "confirm" &&
			!this.state.reEmail.match(/^[a-zöåä0-9.-_%+]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
		) {
			isError = true;

			this.setState({
				reEmail: "",
				reEmailTouched: "touched",
				errorText: "Re-entered email-address is invalid!"
			});
		} else if (
			inputId === "address" &&
			!this.state.address.match(/^([A-ZÅÖÄa-zåäö0-9,?.?-?]{1,}\s?){2,}/)
		) {
			isError = true;

			this.setState({
				address: "",
				addressTouched: "touched",
				errorText: "Valid Address is required!"
			});
		} else if (
			inputId === "city" &&
			!this.state.city.match(/([A-ZÅÄÖa-zåäö]{1,}\s?){1,}/)
		) {
			isError = true;

			this.setState({
				city: "",
				cityTouched: "touched",
				errorText: "Valid City is required!"
			});
		} else if (
			inputId === "state" &&
			this.state.states !== "" &&
			!this.state.states.match(/([A-ZÅÄÖa-zåäö]{1,}\s?){1,}/)
		) {
			isError = true;

			this.setState({
				statesTouched: "touched",
				errorText: "Please Enter a Valid State or Leave it Blank!"
			});
		} else if (
			inputId === "zip" &&
			this.state.zip !== "" &&
			!this.state.zip.match(/[0-9]{5}/)
		) {
			isError = true;

			this.setState({
				zip: "",
				zipTouched: "touched",
				errorText:
					"Please enter a valid Zip/Postal Code or Leave It Blank. For eg: 34142!"
			});
		} else if (
			inputId === "country" &&
			!this.state.country.match(/([A-ZÅÄÖa-zåäö]{1,}\s?){1,}/)
		) {
			isError = true;

			this.setState({
				country: "",
				countryTouched: "touched",
				errorText: "Valid Country is required!"
			});
		} else if (
			inputId === "how" &&
			!this.state.how === "" &&
			!this.state.how.match(/([A-Za-zÅÄÖåäö]\s?){3,}/)
		) {
			isError = true;

			this.setState({
				how: "",
				howTouched: "touched",
				errorText: "Please Enter Valid Data or Leave it Blank!"
			});
		}

		const message = {
			successAdd: "Your data has successfully been submitted!"
		};

		/*

		
		} 
		} else {
			this.setState({
				successAdd: "Your data has been successfully added!",
				fullName: "",
				fullNameError: "",
				phone: "",
				phoneError: "",
				email: "",
				emailError: "",
				reemail: "",
				address: "",
				addressError: "",
				city: "",
				cityError: "",
				states: "",
				statesError: "",
				zip: "",
				zipError: "",
				country: "",
				countryError: "",
				how: "",
				howError: ""
			});
		}

		this.setState({
			...this.state,
			...errors
		});
*/
		return isError;
	}

	checkEmail(e) {
		if (this.state.email === this.state.reemail) {
			this.setState({
				messagecolor: "LightGreen",
				emailMessage: "Emails successfully match!"
			});
		} else {
			this.setState({
				messagecolor: "Red",
				emailMessage: "Emails do not match!"
			});
		}
	}

	handleFocus = e => {
		this.setState({
			errorText: ""
		});
	};

	render() {
		return (
			<div>
				<span className="errorText">{this.state.errorText}</span>

				<h4>1. Personal information</h4>
				<hr />

				<br />
				<br />
				<input
					type="text"
					id={"fullname"}
					name={this.state.fullNameTouched}
					placeholder="Full name*"
					pattern="^([A-ZÄÖÅ][a-zåäö'?.?]{1,}\s?){2,}"
					title="For Example: Sandhya Mahat"
					className="floatLeft"
					value={this.state.fullName}
					onChange={e => this.setState({ fullName: e.target.value })}
					onBlur={e => this.validate("fullname")}
					onFocus={e => this.handleFocus()}
					required
				/>

				<input
					type="tel"
					id="tel"
					name={this.state.phoneTouched}
					placeholder="Phone#*"
					pattern="([+]358[0-9]{9})|(0[0-9]{9})"
					title="For eg: +358404474741"
					className="floatRight"
					value={this.state.phone}
					onChange={e => this.setState({ phone: e.target.value })}
					onBlur={e => this.validate("tel")}
					onFocus={e => this.handleFocus()}
					required
				/>
				<br />
				<br />

				<input
					type="email"
					placeholder="Email*"
					id="email"
					name={this.state.emailTouched}
					value={this.state.email}
					onChange={e => this.setState({ email: e.target.value })}
					onBlur={e => this.validate("email")}
					onFocus={e => this.handleFocus()}
					required
				/>
				<br />
				<br />

				<input
					type="email"
					name=""
					placeholder="Re-enter email*"
					id="confirm"
					name={this.state.reEmailTouched}
					onKeyUp={e => this.checkEmail(e)}
					value={this.state.reemail}
					onChange={e => this.setState({ reemail: e.target.value })}
					onBlur={e => this.validate("confirm")}
					onFocus={e => this.handleFocus()}
					required
				/>
				<span style={{ color: this.state.messagecolor }}>
					{this.state.emailMessage}
				</span>
				<br />
				<br />

				<br />
				<input
					type="text"
					rows="2"
					id="address"
					name={this.state.addressTouched}
					placeholder="Address*"
					pattern="[a-zåäö0-9,.-]\s?{2,}"
					value={this.state.address}
					onChange={e => this.setState({ address: e.target.value })}
					onBlur={e => this.validate("address")}
					onFocus={e => this.handleFocus()}
					required
				/>
				<br />
				<br />

				<hr className="greyHr" />
				<br />
				<input
					type="text"
					id="city"
					name={this.state.cityTouched}
					placeholder="City*"
					pattern="([A-ZÅÄÖa-zåäö]{1,}\s?){1,}"
					className="location"
					value={this.state.city}
					onChange={e => this.setState({ city: e.target.value })}
					onBlur={e => this.validate("city")}
					onFocus={e => this.handleFocus()}
					required
				/>

				<input
					type="text"
					id="state"
					placeholder="State"
					className="location"
					name={this.state.statesTouched}
					pattern="([A-ZÅÄÖa-zåäö]{1,}\s?){1,}"
					value={this.state.states}
					onChange={e => this.setState({ states: e.target.value })}
					onBlur={e => this.validate("state")}
					onFocus={e => this.handleFocus()}
				/>

				<input
					type="text"
					id="country"
					name={this.state.countryTouched}
					placeholder="Country/Region*"
					pattern="([A-ZÅÄÖa-zåäö]{1,}\s?){1,}"
					className="location"
					value={this.state.country}
					onChange={e => this.setState({ country: e.target.value })}
					onBlur={e => this.validate("country")}
					onFocus={e => this.handleFocus()}
					required
				/>

				<input
					type="text"
					id="zip"
					name={this.state.zipTouched}
					placeholder="Zip/Postal code"
					pattern="[0-9]{5}"
					className="locationend"
					value={this.state.zip}
					onChange={e => this.setState({ zip: e.target.value })}
					onBlur={e => this.validate("zip")}
					onFocus={e => this.handleFocus()}
				/>

				<br />
				<br />
				<br />

				<input
					type="text"
					id="how"
					name={this.state.howTouched}
					pattern="([A-Za-zÅÄÖåäö]\s?){3,}"
					placeholder="How did you hear about us"
					value={this.state.how}
					onChange={e => this.setState({ how: e.target.value })}
					onBlur={e => this.validate("how")}
					onFocus={e => this.handleFocus()}
				/>
			</div>
		);
	}
}

export default Info;
