import React from 'react';

type CardProps = {
	card: {
		id: number;
		src: string;
	};
};
function Card({ card }: CardProps) {
	return (
		<div className="card">
			<div>
				<img className="front" src={card.src} alt="card image" />
				<img className="back" src={'/img/cover.jpeg'} alt="card cover" />
			</div>
		</div>
	);
}

export default Card;
