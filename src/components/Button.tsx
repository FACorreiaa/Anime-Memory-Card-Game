import React from 'react';

type ButtonProps = {
	children: React.ReactNode;
};
function Button({ children }: ButtonProps) {
	return <div>{children}</div>;
}

export default Button;
