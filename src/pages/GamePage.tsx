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
	PLAYER_ONE = 'Player 1',
	PLAYER_TWO = 'Player 2',
}

function GamePage() {
	const [cards, setCards] = useState(Array<CardObjectType>);
	const [playerOnePoint, setPlayerOnePoints] = useState(0);
	const [playerTwoPoint, setPlayerTwoPoints] = useState(0);
	const [playerOneTurn, setPlayerOneTurn] = useState(0);
	const [playerTwoTurn, setPlayerTwoTurn] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const [gameStatus, setGameStatus] = useState<GAME_STATE>(GAME_STATE.GAME_OFF);
	const [playerTurn, setPlayerTurn] = useState<PLAYER_TURN>(
		PLAYER_TURN.PLAYER_ONE
	);

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
		setPlayerOneTurn(0);
		setPlayerTwoTurn(0);
		setPlayerOnePoints(0);
		setPlayerTwoPoints(0);
	};

	const onHandleCardClick = (card: CardObjectType) => {
		//@ts-ignore
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	const resetPlayerOneTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setPlayerOneTurn((state) => state + 1);
		setPlayerTurn(PLAYER_TURN.PLAYER_TWO);
		setDisabled(false);
	};

	const resetPlayerTwoTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setPlayerTwoTurn((state) => state + 1);
		setPlayerTurn(PLAYER_TURN.PLAYER_ONE);
		setDisabled(false);
	};

	const checksValidPlayerOneTurn = () => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);
			//@ts-ignore

			if (choiceOne?.src === choiceTwo?.src) {
				setPlayerOnePoints((state) => state + 1);
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
				resetPlayerOneTurn();
			} else {
				setTimeout(() => resetPlayerOneTurn(), 500);
			}
		}
	};

	const checksValidPlayerTwoTurn = () => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);
			//@ts-ignore

			if (choiceOne?.src === choiceTwo?.src) {
				setPlayerTwoPoints((state) => state + 1);
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
				resetPlayerTwoTurn();
			} else {
				setTimeout(() => resetPlayerTwoTurn(), 500);
			}
		}
	};

	useEffect(() => {
		playerTurn === PLAYER_TURN.PLAYER_ONE
			? checksValidPlayerOneTurn()
			: checksValidPlayerTwoTurn();
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

	console.log('playerTurn', playerTurn);
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
					playerOneTurn={playerOneTurn}
					playerTwoTurn={playerTwoTurn}
					playerOnePoints={playerOnePoint}
					playerTwoPoints={playerTwoPoint}
				/>

				{cards.every((card) => card.matched) &&
				gameStatus === GAME_STATE.GAME_FINISHED ? (
					<p className="message-status">
						{playerTurn} won in {playerOneTurn} turns with {playerOnePoint} pts
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
