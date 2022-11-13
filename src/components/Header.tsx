import React from 'react';
import Button from './Button';
import './Header.css';
type HeaderProps = {
	onHandleButtonClick: () => void;
	title: string;
};
function MainHeader({ onHandleButtonClick, title }: HeaderProps) {
	return (
		<div className="header-container">
			<h1 className="title">{title}</h1>
			<Button onClick={onHandleButtonClick}>New Game</Button>
		</div>
	);
}

export default MainHeader;
