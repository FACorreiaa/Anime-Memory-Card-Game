import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './MainPage.css';
function MainPage() {
	return (
		<div className="container">
			<h2>Have fun!</h2>
			<div>
				<Button className="button-style">
					<Link className="link" to="/game">
						Single Player
					</Link>
				</Button>
				<Button className="button-style">
					<Link className="link" to="/game">
						Two Players
					</Link>
				</Button>
			</div>
		</div>
	);
}

export default MainPage;
