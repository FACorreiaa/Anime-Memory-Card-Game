import './Card.css';
function Card({ card, onHandleCardClick, flipped }) {
	const handleClick = () => {
		onHandleCardClick(card);
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
