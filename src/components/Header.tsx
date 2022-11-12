import React from 'react';
import Button from './Button';
import './Header.css';
type HeaderProps = {
	shuffleCards: () => void;
};
function MainHeader({ shuffleCards }: HeaderProps) {
	return (
		<div>
			<h1 className="title">Memory Game!</h1>
			<Button onClick={shuffleCards}>New Game</Button>
		</div>
	);
}

export default MainHeader;
