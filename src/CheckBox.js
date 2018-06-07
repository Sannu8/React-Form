import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./Css/CheckBox.css";

class CheckBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isChecked: false
		}
	}


	toggleCheckBoxChange = () => {

		this.setState(({ isChecked }) => ({ isChecked: !isChecked }));

		this.props.handleCheckboxChange(this.props.data, this.props.check);
	}

	render() {
		const data = this.props.data;


		return (
			<label className="container" >
				{data}
				< input
					type="checkbox"
					checked={this.state.isChecked}
					id={this.props.id}
					value={data}
					className={this.props.check}
					name="check"
					onChange={e => this.toggleCheckBoxChange()}
					required={this.props.required}
					key={data}
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

CheckBox.propTypes = {
	handleCheckboxChange: PropTypes.func.isRequired,
	data: PropTypes.string.isRequired


};

export default CheckBox;
