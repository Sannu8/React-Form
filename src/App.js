import React, { Component } from "react";
import "./Css/App.css";

import Header from "./Header";
import Button from "./Button";
import Info from "./Info.js";
import Skills from "./Skills.js";
import Portfolio from "./Portfolio.js";

class App extends Component {
	render() {
		return (
			<form>
				<Header />
				<Info />
				<Skills />
				<Portfolio />
				<input type="submit" name="" value="Submit" className="submit" />
			</form>
		);
	}
}

export default App;
