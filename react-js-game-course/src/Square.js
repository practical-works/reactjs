import React, { Component } from "react";

class Square extends Component {
	state = {
		value: "-"
	};
	render() {
		return (
			<button
				className="btn btn-secondary btn-lg py-3 px-5 m-1"
				style={{
					fontSize: "400%",
					maxWidth: "128px",
					maxHeight: "128px",
					minWidth: "128px",
					minHeight: "128px"
				}}
				onClick={e => this.setState({ value: "X" })}
			>
				{this.state.value}
			</button>
		);
	}
}

export default Square;
