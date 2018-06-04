import React from "react";
import "./Css/Radio.css";

const Radio = props => {
	const data = props.data;

	return (
		<td>
			<label className="containerRadio">
				<input
					type="radio"
					name="button"
					id={props.id}
					checked={props.checked}
					onChange={e => props.handleCheck(e)}
					required
				/>
				<span className="checkmarkRadio">
					<div className="buttonText">{data}</div>
				</span>
			</label>
		</td>
	);
};

export default Radio;
