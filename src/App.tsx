import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GamePage from './pages/GamePage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/game" element={<GamePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
