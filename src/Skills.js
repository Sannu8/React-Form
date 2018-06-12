import React, { Component } from "react";
import "./Css/Skills.css";

import Radio from "./Radio.js";
import CheckBox from "./CheckBox.js";

class Skills extends Component {

	constructor(props) {
		super(props);

		this.state = {
			inputExperience: "",
			exDatas: ["Visual Design", "UX Design", "Front-end Development"],
			cityDatas: [
				"Austin, Texas",
				"New York, New York",
				"Toronto, Canada",
				"Shanghai, China",
				"Dublin, Ireland",
				"Hursley, UK",
				"Boeblingen, Germany",
				"Somewhere Else"
			],
			selectedOption: "",
			required: "required"
		};
	}

	componentWillMount = () => {
		this.selectedCheckboxes = new Set();
	}

	handleDelete = (e, element) => {
		const newExDatas = Object.assign([], this.state.exDatas).filter(
			e => e !== element
		);
		var newCityDatas;
		if (this.state.cityDatas.length !== 1) {
			newCityDatas = Object.assign([], this.state.cityDatas).filter(
				e => e !== element
			);
		} else {
			newCityDatas = this.state.cityDatas;
		}

		this.setState({
			exDatas: newExDatas,
			cityDatas: newCityDatas
		});
	};

	handleAdd = valueEx => {
		if (valueEx !== "") {
			const newExDatas = Object.assign([], this.state.exDatas).concat(valueEx);
			this.setState({
				exDatas: newExDatas,
				inputExperience: "",
				inputExperienceError: false
			});
			this.props.validate("inputExperience", "");
		}
	};

	handleRadioCheck = e => {
		this.setState({
			selectedOption: e.target.id
		});
	};

	toggleCheckbox = (label, className) => {
		if (className === "city") {
			if (this.selectedCheckboxes.has(label)) {
				this.selectedCheckboxes.delete(label);
			}
			else {
				this.selectedCheckboxes.add(label);
			}

			var count = 0;
			for (const checkbox of this.selectedCheckboxes) {
				count++;
			}

			if (count === 0) {
				this.setState({ required: "required" });
			}
			else {
				this.setState({ required: "" });
			}
		}
	}

	render() {
		const radioids = ["design", "visual", "ux", "front"];
		const radiodatas = [
			"Design Research",
			"Visual Design",
			"UX Design",
			"Front-end Dev"
		];

		return (
			<div>
				<h3>2. Skills and location</h3>
				<hr />
				<br />
				<section className="text">
					Which is your primary design discipline ?*
				</section>
				<br />
				<br />


				<ul id="buttons" className="flex-container">
					{radioids.map((data, i) => (
						<Radio
							data={radiodatas[i]}
							id={data}
							isChecked={this.state.isChecked}
							checked={this.state.selectedOption === data}
							handleCheck={this.handleRadioCheck}
							key={data}
						/>
					))}
				</ul>

				<ul id="questions" className="flex-container">
					<li className="text">
						<br />
						<section className="text">
							Do you have experience with any other disciplines?
						</section>
					</li>

					<li className="secondCol">
						<br />
						<section className="text">
							Where are you interested in working?*
						</section>
					</li>
				</ul>

				<ul>

					<li id="EmptyValid" className="flex-container">
						<small>
							You must be legally authorized to work without visa
							<br />
							sponsorship in the location(s) you choose.
						</small>
					</li>
				</ul>

				<ul id="checkBoxes" className="flex-container">
					<li id="ExperienceList">

						{this.state.exDatas.map((data, i) => (
							<CheckBox
								data={this.state.exDatas[i]}
								delete={this.handleDelete}
								id={data}
								required=""
								check="experience"
								handleCheckboxChange={this.toggleCheckbox}
								key={data}
							/>
						))}
					</li>

					<li className="secondCol">
						<br />
						{this.state.cityDatas.map((data, i, array) => (
							<CheckBox
								data={this.state.cityDatas[i]}
								delete={this.handleDelete}
								id={data}
								handleCheckboxChange={this.toggleCheckbox}
								required={this.state.required}
								check="city"
								key={data}
							/>
						))}
					</li>
				</ul>

				<ul id="Add" className="flex-container">
					<li>
						<input
							type="text"
							pattern=""
							title="Please Click the 'Add Experience' Button to add your skill!"
							name={this.props.inputExperienceTouched}
							value={this.state.inputExperience}
							onBlur={e =>
								this.props.validate(
									"inputExperience",
									this.state.inputExperience
								)
							}
							onChange={e =>
								this.setState({ inputExperience: e.target.value })
							}
						/>
					</li>
					<li>
						<input
							type="button"
							value="Add Experience"
							onClick={() => this.handleAdd(this.state.inputExperience)}
						/>
					</li>
				</ul>

			</div >
		);
	}
}

export default Skills;
