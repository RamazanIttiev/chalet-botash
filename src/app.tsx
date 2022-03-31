import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import { Home } from './pages/Home';
import { Header } from './views/header/header';
import { Footer } from './views/footer/footer';
import Airtable from 'airtable';

export const airtableBase = new Airtable({
	apiKey: process.env.REACT_APP_AIRTABLE_PRIVATE_KEY,
}).base('appODUEXCW5oqxyCY');

const App = () => {
	const [activeTab, setActiveTab] = useState('');

	const handleOnView = (tabId: string) => {
		setActiveTab(tabId);
	};
	return (
		<BrowserRouter>
			<Header activeTab={activeTab} />
			<Routes>
				<Route path="/" element={<Home activeTab={activeTab} handleOnView={handleOnView} />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer activeTab={activeTab} handleOnView={handleOnView} />
		</BrowserRouter>
	);
};

export default App;
