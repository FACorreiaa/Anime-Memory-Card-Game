import React from 'react';
import './PlayerTurns.css';
type PlayerTurnsType = {
	turns: number;
	points: number;
};
function PlayerTurns({ turns, points }: PlayerTurnsType) {
	return (
		<div>
			<p>Turns: {turns}</p>
			<p>Points: {points}</p>
		</div>
	);
}

export default PlayerTurns;
