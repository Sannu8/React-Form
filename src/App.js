import React, { Component } from "react";
import "./Css/App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "./Header";
import Button from "./Button";
import Info from "./Info.js";
import Skills from "./Skills.js";
import Portfolio from "./Portfolio.js";

class App extends Component {
	render() {
		return (
			<form>
				<BrowserRouter>
					<div>
						<Route path="/" component={Header} />
						<Route path="/personal" component={Info} />
						<Route path="/skills" component={Skills} />
						<Route path="/portfolio" component={Portfolio} />
					</div>
				</BrowserRouter>

				<div className="flex-container">
					<Button title="Personal" />
					<Button title="Skills" />
					<Button title="Portfolio" />
				</div>

				<Info />
				<Skills />
				<Portfolio />
				<input type="submit" name="" value="Submit" className="submit" />
			</form>
		);
	}
}

export default App;
