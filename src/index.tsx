import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useScrollToTop from './hooks/useScrollToTop';
import Landing from './pages/Landing';
import Auth from './features/Auth';

const Wrapper = () => {
	useScrollToTop();
	return (
		<Routes>
			<Route path='/' element={<Landing />} />

			<Route path='/auth/:mode' element={<Auth />}></Route>
		</Routes>
	);
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Wrapper />
		</BrowserRouter>
	</React.StrictMode>
);