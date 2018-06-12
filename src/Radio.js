import React from "react";
import "./Css/Radio.css";

const Radio = props => {
	const data = props.data;

	return (
		<li className="containerRadio">
			<input
				type="radio"
				name="button"
				id={props.id}
				checked={props.checked}
				key={props.id}
				onChange={e => props.handleCheck(e)}
				required
			/>
			<span className="checkmarkRadio">
				<div className="buttonText">{data}</div>
			</span>
		</li>

	);
};

export default Radio;
