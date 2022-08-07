import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import { Home } from './pages/Home';
import { Header } from './views/header/header';
import { Footer } from './views/footer/footer';
import Airtable from 'airtable';
import { FooterData } from './views/footer/footer.model';
import { useCustomIntersectionObserver } from './hooks/intersectionObserver';
import { mapContactsData } from './services/mappers';

export const airtableBase = new Airtable({
	apiKey: process.env.REACT_APP_AIRTABLE_PRIVATE_KEY,
}).base('appODUEXCW5oqxyCY');

const App = () => {
	const [currentTab, setCurrentTab] = useState('');
	const [contactsData, setContactsData] = useState<FooterData[]>([]);

	const socialsLinks = contactsData.slice(4);

	const ref = useRef(null);

	useEffect(() => {
		airtableBase('Contacts')
			.select({
				view: 'Grid view',
			})
			.eachPage(records => {
				// @ts-ignore
				return setContactsData(mapContactsData(records));
			});
	}, [contactsData.length]);

	const handleOnView = (tabId: string) => {
		setCurrentTab(tabId);
	};

	useCustomIntersectionObserver(ref, currentTab, handleOnView);

	return (
		<BrowserRouter>
			<Header socialsLinks={socialsLinks} currentTab={currentTab} />
			<Routes>
				<Route path="/" element={<Home currentTab={currentTab} handleOnView={handleOnView} />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer
				contactsData={contactsData}
				ref={ref}
				socialsLinks={socialsLinks}
				currentTab={currentTab}
				handleOnView={handleOnView}
			/>
		</BrowserRouter>
	);
};

export default App;
