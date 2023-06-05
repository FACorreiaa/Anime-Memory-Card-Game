import './Header.css';
type HeaderProps = {
	title: string;
};
function Header({ title }: HeaderProps) {
	return (
		<div className="bg-gradient-to-b from-zinc-500 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
			<h1 className="title">{title}</h1>
		</div>
	);
}

export default Header;
