import React from 'react';
import './Header.css';
type HeaderProps = {
	title: string;
};
function Header({ title }: HeaderProps) {
	return (
		<div className="header-container">
			<div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
				<p className="fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					Memory&nbsp;
					<code className="font-mono font-bold">Card&nbsp;</code>
					Game
				</p>
			</div>
		</div>
	);
}

export default Header;
