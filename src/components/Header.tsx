import React from 'react';
import Button from './Button';
import './Header.css';
type HeaderProps = {
	onStartGameClick: () => void;
};
function MainHeader({ onStartGameClick }: HeaderProps) {
	return (
		<div>
			<h1 className="title">Memory Game!</h1>
			<Button onClick={onStartGameClick}>New Game</Button>
		</div>
	);
}

export default MainHeader;
