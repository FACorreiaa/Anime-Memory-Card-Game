import React from 'react';
import './PlayerTurns.css';
type PlayerTurnsType = {
	turns: number;
	points: number;
	playerOne: string;
	playerTwo: string;
};

function PlayerTurns({ turns, points, playerOne, playerTwo }: PlayerTurnsType) {
	return (
		//I repeat content here but i would iterate over an object of players to display the respective data
		<div className="container">
			<div className="row">
				<div className="column">
					<div className="player-container">
						<h5 className="player-title">{playerOne}</h5>
						<div>
							<span>Turns: {turns}</span>
							<span>Points: {points}</span>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="player-container">
						<h5 className="player-title">{playerTwo}</h5>
						<div>
							<span>Turns: {turns}</span>
							<span>Points: {points}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlayerTurns;
