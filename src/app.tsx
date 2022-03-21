import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import { Header } from './views/header';
import { Footer } from './views/footer';
import { changeLanguage } from 'i18next';
import Airtable from 'airtable';

export const airtableBase = new Airtable({
	apiKey: process.env.REACT_APP_AIRTABLE_PRIVATE_KEY,
}).base('appODUEXCW5oqxyCY');

const App = () => {
	const [value, setValue] = useState(localStorage.getItem('i18nextLng'));

	const changeLang = (language: string) => {
		setValue(language);
		changeLanguage(language);
	};

	return (
		<BrowserRouter>
			<Header changeLang={changeLang} value={value} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer changeLang={changeLang} value={value} />
		</BrowserRouter>
	);
};

export default App;
