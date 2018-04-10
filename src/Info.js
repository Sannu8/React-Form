import React, { Component } from "react";
import "./Css/Info.css";

class Info extends Component {
	constructor(props) {
		super(props);

		this.state = {
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
			howError: "",
			emailMessage: "",
			messagecolor: ""
		};
	}

	validate(inputId) {
		let isError = false;

		const errors = {
			fullNameError: "",
			phoneError: "",
			emailError: "",
			addressError: "",
			cityError: "",
			statesError: "",
			zipError: "",
			countryError: "",
			howError: ""
		};

		const message = {
			successAdd: "Your data has successfully been submitted!"
		};

		/*
		var i = document.getElementById(inputId);
		i.classList.add("touched");

		var errorArea = document.getElementById("errorText");
		var errorMessage = "Valid " + inputId + " is Required.";

		errorArea.innerHTML = errorMessage;
		errorArea.style.color = "red";

		if (!this.state.fullName.match()) {
			isError = true;
			errors.fullNameError = "Valid FullName is required.";
			console.log(errors.fullNameError);

			this.setState({
				fullName: ""
			});
		} else if (!this.state.phone.match()) {
			isError = true;
			errors.phoneError = "Valid phoneNumber is required.";

			this.setState({
				phone: ""
			});
		} else if (!this.state.email.match()) {
			isError = true;
			errors.emailError = "Valid email address is required";

			this.setState({
				email: ""
			});
		} else if (!this.state.address.match()) {
			isError = true;
			errors.AddressError = "Valid Address is required";

			this.setState({
				address: ""
			});
		} else if (!this.state.city.match()) {
			isError = true;
			errors.cityError = "Valid City is required";

			this.setState({
				city: ""
			});
		} else if (!this.state.states.match()) {
			isError = true;
			errors.statesError = "Valid Address is required";

			this.setState({
				states: ""
			});
		} else if (!this.state.zip.match()) {
			isError = true;
			errors.zipError = "Valid Address is required";

			this.setState({
				zip: ""
			});
		} else if (!this.state.country.match()) {
			isError = true;
			errors.countryError = "Valid Address is required";

			this.setState({
				country: ""
			});
		} else if (!this.state.how.match()) {
			isError = true;
			errors.howError = "Valid Address is required";

			this.setState({
				how: ""
			});
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

		return isError; */
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

	render() {
		return (
			<form>
				<div id="errorText" />
				<h4>1. Personal information</h4>
				<hr />

				<br />
				<br />
				<input
					type="text"
					id="fullname"
					placeholder="Full name*"
					pattern="^([A-ZÄÖÅ][a-zåäö'?.?]{1,}\s?){2,}"
					title="Only accepts Alphabets(Please Enter a Valid FullName. For Eg: Sandhya Mahat)"
					className="floatLeft"
					value={this.state.fullName}
					onChange={e => this.setState({ fullName: e.target.value })}
					onBlur={e => this.validate("fullname")}
					required
				/>

				<input
					type="tel"
					id="tel"
					placeholder="Phone#*"
					pattern="([+]358[0-9]{9})|(0[0-9]{9})"
					title="Please insert your phone number with the country code. For eg: +358404178995"
					className="floatRight"
					value={this.state.phone}
					onChange={e => this.setState({ phone: e.target.value })}
					onBlur={e => this.validate("tel")}
					required
				/>
				<br />
				<br />

				<input
					type="email"
					placeholder="Email*"
					id="email"
					value={this.state.email}
					onChange={e => this.setState({ email: e.target.value })}
					onBlur={e => this.validate("email")}
					required
				/>
				<br />
				<br />

				<input
					type="email"
					name=""
					placeholder="Re-enter email*"
					id="confirm"
					onKeyUp={e => this.checkEmail(e)}
					value={this.state.reemail}
					onChange={e => this.setState({ reemail: e.target.value })}
					onBlur={e => this.validate("confirm")}
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
					placeholder="Address*"
					pattern="[a-zåäö0-9,.-]\s?{2,}"
					value={this.state.address}
					onChange={e => this.setState({ address: e.target.value })}
					onBlur={e => this.validate("address")}
					required
				/>
				<br />
				<br />

				<hr className="greyHr" />
				<br />
				<input
					type="text"
					id="city"
					placeholder="City*"
					pattern="([A-ZÅÄÖa-zåäö]{1,}\s?){1,}"
					className="location"
					value={this.state.city}
					onChange={e => this.setState({ city: e.target.value })}
					onBlur={e => this.validate("city")}
					required
				/>

				<input
					type="text"
					id="state"
					placeholder="State"
					className="location"
					pattern="([A-ZÅÄÖa-zåäö]{1,}\s?){1,}"
					value={this.state.states}
					onChange={e => this.setState({ states: e.target.value })}
					onBlur={e => this.validate("state")}
				/>

				<input
					type="text"
					id="country"
					placeholder="Country/Region*"
					pattern="([A-ZÅÄÖa-zåäö]{1,}\s?){1,}"
					className="location"
					value={this.state.country}
					onChange={e => this.setState({ country: e.target.value })}
					onBlur={e => this.validate("country")}
					required
				/>

				<input
					type="text"
					id="zip"
					placeholder="Zip/Postal code"
					pattern="[0-9]{5}"
					className="locationend"
					value={this.state.zip}
					onChange={e => this.setState({ zip: e.target.value })}
					onBlur={e => this.validate("zip")}
				/>

				<br />
				<br />
				<br />

				<input
					type="text"
					id="how"
					pattern="([A-Za-zÅÄÖåäö]\s?){3,}"
					placeholder="How did you hear about us"
					value={this.state.how}
					onChange={e => this.setState({ how: e.target.value })}
					onBlur={e => this.validate("how")}
				/>
			</form>
		);
	}
}

export default Info;
