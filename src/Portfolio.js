import React, { Component } from "react";
import "./Css/Portfolio.css";

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			portfolio: "",
			anything: ""
		};
	}
	render() {
		return (
			<div>
				<h4>3. Portfolio</h4>
				<hr />
				<br />
				Prove you're IBM's next great designer by showing us who you are. What
				you have done. How you think. Tell us your story.
				<br />
				<br />
				<br />
				<input
					type="text"
					name={this.props.portfolioTouched}
					pattern="^(www.|https?:[www.]?\/\/)[a-z0-9]+\.[a-z]{2,4}\/?$"
					title="Please include a valid url. For eg: www.kidesaatio.fi"
					value={this.state.portfolio}
					onFocus={e => this.props.handleFocus()}
					onBlur={e => this.props.validate("portfolio", this.state.portfolio)}
					onChange={e => this.setState({ portfolio: e.target.value })}
					placeholder="Portfolio link*"
					required
				/>
				<br />
				<br />
				<textarea
					rows="5"
					placeholder="Anything else (another link, availability, etc.)?"
					value={this.state.anything}
					onChange={e => this.setState({ anything: e.target.value })}
				/>
				<br />
				<br />
				<br />
			</div>
		);
	}
}

export default Portfolio;
