import React, { Component } from "react";
import "./Css/CheckBox.css";

class CheckBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isChecked: false
		};
	}

	handleCheck(e, required, index) {
		this.setState({ isChecked: e.target.checked });

		var input = document.getElementsByClassName("check");

		let oneChecked = false;

		if (e.target.checked === true && required === "required") {
			oneChecked = true;
		}

		if (oneChecked === true) {
			for (let i = 0; i < index; i++) {
				input[i].required = false;
			}
		} else {
			for (let i = 0; i < index; i++) {
				input[i].required = true;
			}
		}
	}

	render() {
		const data = this.props.data;

		return (
			<label className="container">
				{data}
				<input
					type="checkbox"
					checked={this.state.isChecked}
					id="check"
					className={this.props.check}
					name="check"
					onChange={e =>
						this.handleCheck(e, this.props.required, this.props.index)
					}
					required={this.props.required}
				/>
				<span className="checkmark" />
				<span onClick={e => this.props.delete(e, data)} className="Delete">
					{" "}
					Delete
				</span>
			</label>
		);
	}
}

export default CheckBox;
