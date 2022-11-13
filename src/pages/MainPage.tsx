import React from 'react';
import MainMenu from '../components/MainMenu';
import './MainPage.css';
function MainPage() {
	return (
		<div className="container">
			<h1>Main Menu</h1>
			<h2>Memorization card game!</h2>
			<MainMenu />
		</div>
	);
}

export default MainPage;
