import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
import './MainPage.css';
function MainPage() {
	return (
		<div className="container">
			<h2>Have fun!</h2>
			<MainMenu>
				<Button className="button-style">
					<Link to="/game">Single Player</Link>
				</Button>
				<Button className="button-style"> 2 Players</Button>
			</MainMenu>
		</div>
	);
}

export default MainPage;
