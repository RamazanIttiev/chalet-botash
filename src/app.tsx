import React, { ReactNode, useEffect, useState } from 'react';
import Airtable from 'airtable';
import { Home } from './pages/Home';
import { Header } from './views/header/header';
import { Footer } from './views/footer/footer';
import SwiperCore, { Lazy } from 'swiper';
import { NotFoundPage } from './pages/NotFound';

export const airtableBase = new Airtable({
	apiKey: process.env.REACT_APP_AIRTABLE_PRIVATE_KEY,
}).base('appODUEXCW5oqxyCY');

SwiperCore.use([Lazy]);

const Layout = ({
	children,
	currentTab,
	handleOnView,
}: {
	children: ReactNode;
	currentTab: string;
	handleOnView: (tabId: string) => void;
}) => {
	return (
		<React.Fragment>
			<Header currentTab={currentTab} />
			{children}
			<Footer currentTab={currentTab} handleOnView={handleOnView} />
		</React.Fragment>
	);
};

const App = () => {
	const [path, setPath] = useState(window.location.pathname);
	const [currentTab, setCurrentTab] = useState('');

	const handleOnView = (tabId: string) => {
		setCurrentTab(tabId);
	};

	useEffect(() => {
		const handlePopState = () => {
			setPath(window.location.pathname);
		};

		window.addEventListener('popstate', handlePopState);
		return () => window.removeEventListener('popstate', handlePopState);
	}, []);

	const renderPage = () => {
		switch (path) {
			case '/':
				return (
					<Layout currentTab={currentTab} handleOnView={handleOnView}>
						<Home currentTab={currentTab} handleOnView={handleOnView} />
					</Layout>
				);
			default:
				return (
					<Layout currentTab={currentTab} handleOnView={handleOnView}>
						<NotFoundPage />
					</Layout>
				);
		}
	};

	return renderPage();
};

export default App;
