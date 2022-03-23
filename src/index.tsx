import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import theme from './theme';
import { CircularProgress } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import './i18n';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './views/gallery/theme/carousel.css';

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<CircularProgress color="inherit" />}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root'),
);
