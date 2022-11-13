import React from 'react';
import './Header.css';
type HeaderProps = {
	title: string;
};
function MainHeader({ title }: HeaderProps) {
	return (
		<div className="header-container">
			<h1 className="title">{title}</h1>
		</div>
	);
}

export default MainHeader;
