import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Board from './components/Board';
import Card from './components/Card';
const cardImages = [
	{ src: '/img/cover.jpeg' },
	{ src: '/img/hiruma.jpg' },
	{ src: '/img/ikki.jpg' },
	{ src: '/img/ippo.jpg' },
	{ src: '/img/kongo.jpg' },
	{ src: '/img/kusanagi.jpg' },
	{ src: '/img/luffy.jpg' },
	{ src: '/img/reinhard.jpg' },
	{ src: '/img/taiga.jpg' },
	{ src: '/img/takamura.jpg' },
	{ src: '/img/yoko.jpg' },
];

type CardType = {
	src: string;
	id: number;
};
function App() {
	const [cards, setCards] = useState(Array<CardType>);
	const [turns, setTurns] = useState(0);
	const shuffleCards = () => {
		console.log('cardImages', cardImages);
		const shuffledCardList = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({
				...card,
				id: Math.random(),
			}));

		setCards(shuffledCardList);
		setTurns(0);
	};

	return (
		<div className="App">
			<h1>Memory Game!</h1>
			<Button onClick={shuffleCards}>New Game</Button>
			<div className="card-grid">
				{cards.map((card) => (
					<Card key={card.id} card={card} />
				))}
			</div>
		</div>
	);
}

export default App;
