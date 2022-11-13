import { useState, useEffect } from 'react';
import './GamePage.css';
import Board from '../components/Board';
import Card, { CardObjectType } from '../components/Card';
import PlayerTurns from '../components/PlayerTurns';
import Header from '../components/Header';
import Button from '../components/Button';
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

enum GAME_STATE {
	GAME_OFF = 'OFF',
	ON_GOING = ' GOING',
	GAME_FINISHED = 'FINISHED',
}

enum PLAYER_TURN {
	PLAYER_ONE = 'Player 1 Turn',
	PLAYER_TWO = 'Player 2 Turn',
}

function GamePage() {
	const [cards, setCards] = useState(Array<CardObjectType>);
	const [turns, setTurns] = useState(0);
	const [points, setPoints] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	const [gameStatus, setGameStatus] = useState<GAME_STATE>(GAME_STATE.GAME_OFF);

	const onHandleStartButton = () => {
		setGameStatus(GAME_STATE.ON_GOING);

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

			if (choiceOne?.src === choiceTwo?.src) {
				setPoints((prevPoint) => prevPoint + 1);
				setCards((prevState) => {
					return prevState.map((card) => {
						//@ts-ignore

						if (card.src === choiceOne?.src) {
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
		setGameStatus(GAME_STATE.GAME_OFF);
		//onHandleStartButton();
	}, []);

	const onHandleStopButton = () => {
		setGameStatus(GAME_STATE.GAME_OFF);
	};
	const renderButtonMessage =
		gameStatus === GAME_STATE.GAME_OFF ? 'Start game' : 'Reset Game';
	return (
		<div className="container">
			<div>
				<Button onClick={onHandleStartButton} className="button">
					{renderButtonMessage}
				</Button>
				<Button onClick={onHandleStopButton} className="button">
					Stop game
				</Button>

				<PlayerTurns
					playerOne="Player 1"
					playerTwo="Player 2"
					turns={turns}
					points={points}
				/>

				{cards.every((card) => card.matched) &&
				gameStatus === GAME_STATE.GAME_FINISHED ? (
					<p className="message-status">
						You won in {turns} turns with {points} pts
					</p>
				) : (
					<h3 className="message-status">Enjoy the Game!</h3>
				)}
			</div>

			{gameStatus === GAME_STATE.GAME_OFF ? (
				<h4>Press Start to train your memory!</h4>
			) : (
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
			)}
		</div>
	);
}

export default GamePage;
