import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GamePage from './pages/GamePage';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Header title="Memorization card game!" />

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
