import React, { Component } from "react";
import "./Css/Button.css";

class Button extends Component {
	render() {
		return <input type="button" value={this.props.title} />;
	}
}

export default Button;
