import React, { Component } from "react";
import "./Css/Info.css";

class Info extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullName: "",
			phone: "",
			email: "",
			reEmail: "",
			address: "",
			city: "",
			states: "",
			zip: "",
			country: "",
			how: "",
			confirmError: false
		};
	}

	checkEmail = id => {
		if (id === "email" && this.state.reEmail !== "") {
			if (this.state.email === this.state.reEmail) {
				this.setState({
					messagecolor: "LightGreen",
					emailMessage: "Emails successfully match!",
					confirmError: false
				});
			} else {
				this.setState({
					messagecolor: "Red",
					emailMessage: "Emails do not match!",
					confirmError: true
				});
			}
		} else if (id === "confirm") {
			if (this.state.email === this.state.reEmail) {
				this.setState({
					messagecolor: "LightGreen",
					emailMessage: "Emails successfully match!",
					confirmError: false
				});
			} else {
				this.setState({
					messagecolor: "Red",
					emailMessage: "Emails do not match!",
					confirmError: true
				});
			}
		}
	};

	render() {
		return (
			<div>
				<span className="errorText" style={{ color: this.props.errorColor }}>
					{this.props.errorText}
				</span>

				<h3>1. Personal information</h3>
				<hr />

				<br />
				<br />
				<input
					type="text"
					id={"fullname"}
					name={this.props.fullNameTouched}
					placeholder="Full name*"
					title="For Example: Sandhya Mahat"
					className="floatLeft"
					value={this.state.fullName}
					onChange={e => this.setState({ fullName: e.target.value })}
					onBlur={e => this.props.validate("fullname", this.state.fullName)}
					required
				/>

				<input
					type="tel"
					id="tel"
					name={this.props.telTouched}
					placeholder="Phone#*"
					title="For eg: +358404474741"
					className="floatRight"
					value={this.state.phone}
					onChange={e => this.setState({ phone: e.target.value })}
					onBlur={e => this.props.validate("tel", this.state.phone)}
					required
				/>
				<br />
				<br />

				<input
					type="text"
					placeholder="Email*"
					id="email"
					className="email"
					onKeyUp={e => this.checkEmail("email")}
					name={this.props.emailTouched}
					value={this.state.email}
					onChange={e => this.setState({ email: e.target.value })}
					onBlur={e =>
						this.props.validate(
							"email",
							this.state.email,
							this.state.confirmError
						)
					}
					required
				/>
				<br />
				<br />

				<input
					type="text"
					className="email"
					placeholder="Re-enter email*"
					id="confirm"
					name={this.props.reEmailTouched}
					onKeyUp={e => this.checkEmail("confirm")}
					value={this.state.reEmail}
					onChange={e => this.setState({ reEmail: e.target.value })}
					onBlur={e =>
						this.props.validate(
							"confirm",
							this.state.reEmail,
							this.state.confirmError
						)
					}
					required
				/>
				<span style={{ color: this.state.messagecolor }}>
					{this.state.emailMessage}
				</span>
				<br />
				<br />
				<br />
				<br />
				<input
					type="text"
					rows="2"
					id="address"
					name={this.props.addressTouched}
					placeholder="Address*"
					value={this.state.address}
					onChange={e => this.setState({ address: e.target.value })}
					onBlur={e => this.props.validate("address", this.state.address)}
					required
				/>
				<br />
				<br />

				<hr className="greyHr" />
				<br />
				<div className="flex-container">
					<input
						type="text"
						id="city"
						name={this.props.cityTouched}
						placeholder="City*"
						className="location"
						value={this.state.city}
						onChange={e => this.setState({ city: e.target.value })}
						onBlur={e => this.props.validate("city", this.state.city)}
						required
					/>

					<input
						type="text"
						id="state"
						placeholder="State"
						className="location"
						name={this.props.statesTouched}
						value={this.state.states}
						onChange={e => this.setState({ states: e.target.value })}
						onBlur={e => this.props.validate("state", this.state.states)}
					/>

					<input
						type="text"
						id="country"
						name={this.props.countryTouched}
						placeholder="Country/Region*"
						className="location"
						value={this.state.country}
						onChange={e => this.setState({ country: e.target.value })}
						onBlur={e => this.props.validate("country", this.state.country)}
						required
					/>

					<input
						type="text"
						id="zip"
						name={this.props.zipTouched}
						placeholder="Zip/Postal code"
						className="locationend"
						value={this.state.zip}
						onChange={e => this.setState({ zip: e.target.value })}
						onBlur={e => this.props.validate("zip", this.state.zip)}
					/>
				</div>

				<br />
				<br /><br />


				<input
					type="text"
					id="how"
					name={this.props.howTouched}
					placeholder="How did you hear about us"
					value={this.state.how}
					onChange={e => this.setState({ how: e.target.value })}
					onBlur={e => this.props.validate("how", this.state.how)}
				/>
			</div>
		);
	}
}

export default Info;
