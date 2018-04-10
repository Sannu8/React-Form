import React, { Component } from "react";
import "./Css/Portfolio.css";

class Portfolio extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<form>
				<h4>3. Portfolio</h4>
				<hr />
				<br />
				Prove you're IBM's next great designer by showing us who you are. What
				you have done. How you think. Tell us your story.
				<br />
				<br />
				<br />
				<input
					type="url"
					name=""
					pattern="https?://.+[.].+"
					title="Please include a valid url starting with https://"
					placeholder="Portfolio link*"
					required
				/>
				<br />
				<br />
				<textarea
					name=""
					rows="5"
					placeholder="Anything else (another link, availability, etc.)?"
				/>
				<br />
				<br />
				<br />
			</form>
		);
	}
}

export default Portfolio;
