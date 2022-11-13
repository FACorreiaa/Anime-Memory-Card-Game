import React from 'react';
import './PlayerTurns.css';
type PlayerTurnsType = {
	turns: number;
	points: number;
};
function PlayerTurns({ turns, points }: PlayerTurnsType) {
	return (
		<div className="message-data">
			<span>Turns: {turns}</span>
			<span>Points: {points}</span>
		</div>
	);
}

export default PlayerTurns;
