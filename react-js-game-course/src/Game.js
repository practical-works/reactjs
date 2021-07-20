import React from "react";
import Board from "./Board";

export default class Game extends React.Component {
	render() {
		return (
			<div className="jumbotron py-2">
				<h1>Tic Tac Toe</h1>
				<hr className="my-4" />
				<div className="row">
					<div className="col">
						<Board />
					</div>
					<div className="col">
						<h3>{/* status */}</h3>
						<h3>History :</h3>
						<button className="btn btn-primary">
							<b className="badge-pill badge-light">1</b>{" "}
							&nbsp;Restart Game
						</button>
					</div>
				</div>
				<hr className="my-4" />
				<p className="lead">{new Date().toDateString()}</p>
			</div>
		);
	}
}
