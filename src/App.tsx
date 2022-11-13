import { useState, useEffect, useMemo } from 'react';
import './App.css';
import Button from './components/Button';
import Board from './components/Board';
import Card, { CardObjectType } from './components/Card';
import PlayerTurns from './components/PlayerTurns';
import Header from './components/Header';
import MainHeader from './components/Header';

const cardImages = [
	{ src: '/img/hiruma.jpg', matched: false },
	{ src: '/img/ikki.jpg', matched: false },
	{ src: '/img/ippo.jpg', matched: false },
	{ src: '/img/kongo.jpg', matched: false },
	{ src: '/img/kusanagi.jpg', matched: false },
	{ src: '/img/luffy.jpg', matched: false },
	{ src: '/img/taiga.jpg', matched: false },
	{ src: '/img/takamura.jpg', matched: false },
	{ src: '/img/yoko.jpg', matched: false },
];

function App() {
	const [cards, setCards] = useState(Array<CardObjectType>);
	const [turns, setTurns] = useState(0);
	const [points, setPoints] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	const startGame = () => {
		const shuffledCardList = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({
				...card,
				id: Math.random(),
			}));

		setChoiceOne(null);
		setChoiceTwo(null);
		setCards(shuffledCardList);
		setTurns(0);
		setPoints(0);
	};

	const onHandleCardClick = (card: CardObjectType) => {
		//@ts-ignore
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prevTurn) => prevTurn + 1);
		setDisabled(false);
	};

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);
			//@ts-ignore

			if (choiceOne?.id === choiceTwo?.id) {
				setPoints((prevPoint) => prevPoint + 1);
				setCards((prevState) => {
					return prevState.map((card) => {
						//@ts-ignore

						if (card.id === choiceOne?.id) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
				resetTurn();
			} else {
				setTimeout(() => resetTurn(), 500);
			}
		}
	}, [choiceOne, choiceTwo]);

	//start new gane
	useEffect(() => {
		startGame();
	}, []);

	return (
		<div className="App">
			<MainHeader onStartGameClick={startGame} />
			<PlayerTurns turns={turns} points={points} />
			{cards.every((card) => card.matched) ? (
				<p className="message-status">
					You won in ${turns} with ${points}
				</p>
			) : (
				<p className="message-status">Enjoy the Game!</p>
			)}
			<Board>
				{cards.map((card) => (
					<Card
						key={card.id}
						card={card}
						onHandleCardClick={onHandleCardClick}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						disabled={disabled}
					/>
				))}
			</Board>
		</div>
	);
}

export default App;
