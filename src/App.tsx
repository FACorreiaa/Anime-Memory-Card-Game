import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';
import { Suspense } from 'react';
import Header from './components/Header';
function App() {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<Header title="Memory card game" />
			<div className="App">
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
