import React from 'react';

type ButtonTypeProps = {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
};

function Button({ children, onClick, className }: ButtonTypeProps) {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
