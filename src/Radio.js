import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Css/Radio.css";

class Radio extends Component {
	render() {
		const data = this.props.data;

		return (
			<td>
				<label className="containerRadio">
					<input
						type="radio"
						name="button"
						id={this.props.id}
						checked={this.props.checked}
						onChange={e => this.props.handleCheck(e)}
						required
					/>
					<span className="checkmarkRadio">
						<div className="buttonText">{data}</div>
					</span>
				</label>
			</td>
		);
	}
}

export default Radio;
