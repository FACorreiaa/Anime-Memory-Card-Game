import React from 'react';

type ButtonTypeProps = {
	children: React.ReactNode;
	onClick: () => void;
};

function Button({ children, onClick }: ButtonTypeProps) {
	return <button onClick={onClick}>{children}</button>;
}

export default Button;
