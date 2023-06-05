import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';
import Header from './components/Header';
import { Suspense } from 'react';
function App() {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<div className="App">
				<Header title="Memorization card game!" />

				<BrowserRouter>
					<Routes>
						<Route path="/" element={<GamePage />} />
					</Routes>
				</BrowserRouter>
			</div>
		</Suspense>
	);
}

export default App;
