import React, { useRef, useState } from 'react';
import Airtable from 'airtable';
import Error from './pages/Error';
import { Home } from './pages/Home';
import { Header } from './views/header/header';
import { Footer } from './views/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useCustomIntersectionObserver } from './hooks/intersectionObserver';

export const airtableBase = new Airtable({
	apiKey: process.env.REACT_APP_AIRTABLE_PRIVATE_KEY,
}).base('appODUEXCW5oqxyCY');

const App = () => {
	const [currentTab, setCurrentTab] = useState('');

	const ref = useRef(null);

	const handleOnView = (tabId: string) => {
		setCurrentTab(tabId);
	};

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

	return (
		<BrowserRouter>
			<Header currentTab={currentTab} />
			<Routes>
				<Route path="/" element={<Home currentTab={currentTab} handleOnView={handleOnView} />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer ref={ref} currentTab={currentTab} handleOnView={handleOnView} />
		</BrowserRouter>
	);
};

export default App;
