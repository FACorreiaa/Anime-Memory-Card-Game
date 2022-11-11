import React from 'react';

export type CardObject = {
	id: number;
	src: string;
};
export type CardProps = {
	card: CardObject;
	onHandleCardClick: (card: CardObject) => void;
};
function Card({ card, onHandleCardClick }: CardProps) {
	const handleClick = () => {
		onHandleCardClick(card);
	};
	return (
		<div className="card">
			<div>
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
