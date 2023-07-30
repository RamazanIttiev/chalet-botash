import React, { useState } from 'react';
import Airtable from 'airtable';
import { Home } from './pages/Home';
import { Header } from './views/header/header';
import { Footer } from './views/footer/footer';
import SwiperCore, { Lazy } from 'swiper';

export const airtableBase = new Airtable({
	apiKey: process.env.REACT_APP_AIRTABLE_PRIVATE_KEY,
}).base('appODUEXCW5oqxyCY');

SwiperCore.use([Lazy]);

const App = () => {
	const [currentTab, setCurrentTab] = useState('');

	const handleOnView = (tabId: string) => {
		setCurrentTab(tabId);
	};

	return (
		<React.Fragment>
			<Header currentTab={currentTab} />
			<Home currentTab={currentTab} handleOnView={handleOnView} />
			<Footer currentTab={currentTab} handleOnView={handleOnView} />
		</React.Fragment>
	);
};

export default App;
