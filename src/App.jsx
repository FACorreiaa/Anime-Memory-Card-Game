import { useState, useEffect, useMemo } from 'react';
import './App.css';
import Button from './components/Button';
import Board from './components/Board';
import Card from './components/Card';
const cardImages = [
	{ src: '/img/cover.jpeg', matched: false },
	{ src: '/img/hiruma.jpg', matched: false },
	{ src: '/img/ikki.jpg', matched: false },
	{ src: '/img/ippo.jpg', matched: false },
	{ src: '/img/kongo.jpg', matched: false },
	{ src: '/img/kusanagi.jpg', matched: false },
	{ src: '/img/luffy.jpg', matched: false },
	{ src: '/img/reinhard.jpg', matched: false },
	{ src: '/img/taiga.jpg', matched: false },
	{ src: '/img/takamura.jpg', matched: false },
	{ src: '/img/yoko.jpg', matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const shuffleCards = () => {
		const shuffledCardList = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({
				...card,
				id: Math.random(),
			}));

		setCards(shuffledCardList);
		setTurns(0);
	};

	const onHandleCardClick = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prevTurn) => prevTurn + 1);
	};

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			if (choiceOne?.src === choiceTwo?.src) {
				setCards((prevState) => {
					return prevState.map((card) => {
						if (card.src === choiceOne?.src) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
				resetTurn();
			} else {
				setTimeout(() => resetTurn(), 1500);
			}
		}
	}, [choiceOne, choiceTwo]);

	console.log(cards);
	return (
		<div className="App">
			<h1>Memory Game!</h1>
			<Button onClick={shuffleCards}>New Game</Button>
			<Board >
				{cards.map((card) => (
					<Card
						key={card.id}
						card={card}
						onHandleCardClick={onHandleCardClick}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
					/>
				))}
			</Board>
		</div>
	);
}

export default App;
