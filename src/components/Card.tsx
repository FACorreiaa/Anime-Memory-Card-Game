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
	const handleClick = () => {
		if (!disabled) {
			onHandleCardClick(card);
		}
	};

	console.log('flipped', flipped);
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
