import React from 'react';
import './MainMenu.css';
type MainMenuProps = {
	children: React.ReactNode;
};
function MainMenu({ children }: MainMenuProps) {
	return (
		<div className="container">
			<div className="menu-wrapper">{children}</div>
		</div>
	);
}

export default MainMenu;
