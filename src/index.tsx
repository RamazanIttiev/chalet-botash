import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './i18n';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './views/gallery/theme/carousel.css';

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root'),
);
