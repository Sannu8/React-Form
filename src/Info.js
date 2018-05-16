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

	checkEmail(e) {
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

	handleChange() {}

	render() {
		return (
			<div>
				<span className="errorText" style={{ color: this.props.errorColor }}>
					{this.props.errorText}
				</span>

				<h4>1. Personal information</h4>
				<hr />

				<br />
				<br />
				<input
					type="text"
					id={"fullname"}
					name={this.props.fullNameTouched}
					placeholder="Full name*"
					pattern="^([A-ZÄÖÅ][a-zåäö'?.?]{1,}\s?){2,}$"
					title="For Example: Sandhya Mahat"
					className="floatLeft"
					value={this.state.fullName}
					onChange={e => this.setState({ fullName: e.target.value })}
					onBlur={e => this.props.validate("fullname", this.state.fullName)}
					onFocus={e => this.props.handleFocus()}
					required
				/>

				<input
					type="tel"
					id="tel"
					name={this.props.telTouched}
					placeholder="Phone#*"
					pattern="([+]358[0-9]{9})|(0[0-9]{9})"
					title="For eg: +358404474741"
					className="floatRight"
					value={this.state.phone}
					onChange={e => this.setState({ phone: e.target.value })}
					onBlur={e => this.props.validate("tel", this.state.phone)}
					onFocus={e => this.props.handleFocus()}
					required
				/>
				<br />
				<br />

				<input
					type="text"
					pattern="^[a-zöåä0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
					placeholder="Email*"
					id="email"
					className="email"
					name={this.props.emailTouched}
					value={this.state.email}
					onChange={e => this.setState({ email: e.target.value })}
					onBlur={e => this.props.validate("email", this.state.email)}
					onFocus={e => this.props.handleFocus()}
					required
				/>
				<br />
				<br />

				<input
					type="text"
					pattern="^[a-zöåä0-9.-_%+]+@[a-z0-9.-]+\.[a-z]{2,4}$"
					className="email"
					placeholder="Re-enter email*"
					id="confirm"
					name={this.props.reEmailTouched}
					onKeyUp={e => this.checkEmail(e)}
					value={this.state.reEmail}
					onChange={e => this.setState({ reEmail: e.target.value })}
					onBlur={e =>
						this.props.validate(
							"confirm",
							this.state.reEmail,
							this.state.confirmError
						)
					}
					onFocus={e => this.props.handleFocus()}
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
					name={this.props.addressTouched}
					placeholder="Address*"
					pattern="^([A-ZÅÖÄa-zåäö0-9,?.?-?]{1,}\s?){2,}"
					value={this.state.address}
					onChange={e => this.setState({ address: e.target.value })}
					onBlur={e => this.props.validate("address", this.state.address)}
					onFocus={e => this.props.handleFocus()}
					required
				/>
				<br />
				<br />

				<hr className="greyHr" />
				<br />
				<input
					type="text"
					id="city"
					name={this.props.cityTouched}
					placeholder="City*"
					pattern="([A-ZÅÄÖa-zåäö]{1,}\s?){1,}"
					className="location"
					value={this.state.city}
					onChange={e => this.setState({ city: e.target.value })}
					onBlur={e => this.props.validate("city", this.state.city)}
					onFocus={e => this.props.handleFocus()}
					required
				/>

				<input
					type="text"
					id="state"
					placeholder="State"
					className="location"
					name={this.props.statesTouched}
					pattern="([A-ZÅÄÖa-zåäö]{1,}\s?){1,}"
					value={this.state.states}
					onChange={e => this.setState({ states: e.target.value })}
					onBlur={e => this.props.validate("state", this.state.states)}
					onFocus={e => this.props.handleFocus()}
				/>

				<input
					type="text"
					id="country"
					name={this.props.countryTouched}
					placeholder="Country/Region*"
					pattern="([A-ZÅÄÖa-zåäö]{1,}\s?){1,}"
					className="location"
					value={this.state.country}
					onChange={e => this.setState({ country: e.target.value })}
					onBlur={e => this.props.validate("country", this.state.country)}
					onFocus={e => this.props.handleFocus()}
					required
				/>

				<input
					type="text"
					id="zip"
					name={this.props.zipTouched}
					placeholder="Zip/Postal code"
					pattern="^[0-9]{5}$"
					className="locationend"
					value={this.state.zip}
					onChange={e => this.setState({ zip: e.target.value })}
					onBlur={e => this.props.validate("zip", this.state.zip)}
					onFocus={e => this.props.handleFocus()}
				/>

				<br />
				<br />
				<br />

				<input
					type="text"
					id="how"
					name={this.props.howTouched}
					pattern="^([A-Za-zÅÄÖåäö]\s?){3,}$"
					placeholder="How did you hear about us"
					value={this.state.how}
					onChange={e => this.setState({ how: e.target.value })}
					onBlur={e => this.props.validate("how", this.state.how)}
					onFocus={e => this.props.handleFocus()}
				/>
			</div>
		);
	}
}

export default Info;
