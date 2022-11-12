import './Card.css';
export type CardObjectType = {
	id: number;
	src: string;
	matched: boolean;
};

type CardPropsType = {
	card: CardObjectType;
	onHandleCardClick: (card: CardObjectType) => void;
	flipped: boolean;
	disabled: boolean;
};
function Card({ card, onHandleCardClick, flipped, disabled }: CardPropsType) {
	let audio = new Audio('/audio/click-effect.wav');

	const handleClick = () => {
		if (!disabled) {
			audio.play();

			onHandleCardClick(card);
		}
	};

	return (
		<div className="card">
			<div className={flipped ? 'flipped' : ''}>
				<img className="front" src={card.src} alt="card image" />
				<img
					className="back"
					src={'/img/cover.jpeg'}
					alt="card cover"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
}

export default Card;
