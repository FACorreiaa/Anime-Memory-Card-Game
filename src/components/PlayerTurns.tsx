import React from 'react';
import './PlayerTurns.css';
type PlayerTurnsType = {
	turns: number;
};
function PlayerTurns({ turns }: PlayerTurnsType) {
	return <p>Turns: {turns}</p>;
}

export default PlayerTurns;
