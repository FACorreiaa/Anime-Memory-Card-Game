import './Board.css';

type BoardTypeProps = {
	children: React.ReactNode;
};
function Board({ children }: BoardTypeProps) {
	return <div className="board">{children}</div>;
}

export default Board;
