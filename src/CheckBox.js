import React, { Component } from "react";
import "./Css/CheckBox.css";

class CheckBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isChecked: false
		};
	}

	handleCheck(e, index) {
		this.setState({ isChecked: e.target.checked });

		var input = document.getElementsByClassName("check");

		let oneChecked = false;
		for (let i = 0; i < index; i++) {
			if (input[i].checked === true) {
				oneChecked = true;
			}
		}

		if (oneChecked === true) {
			//At least one is checked
			for (let i = 0; i < index; i++) {
				input[i].required = false;
			}
		} else {
			//None checked at the moment
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
					onChange={e => this.handleCheck(e, this.props.index)}
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
