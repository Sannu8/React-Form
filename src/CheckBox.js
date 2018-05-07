import React, { Component } from "react";
import "./Css/CheckBox.css";

class CheckBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isChecked: false
		};
	}

	handleCheck(e) {
		this.setState = {
			//isChecked: e.target.checked
		};
	}

	render() {
		const data = this.props.data;

		return (
			<label className="container">
				{data}
				<input
					type="checkbox"
					checked={this.state.isChecked}
					class="check"
					name="check"
					onChange={e => this.setState({ isChecked: e.target.checked })}
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
