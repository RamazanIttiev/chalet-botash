import React from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Typography from '../components/Typography';
import { Button } from '@mui/material';

export const NotFoundPage = () => {
	return (
		<Container sx={{ height: '70vh' }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
				}}>
				<Typography fontSize={'20px'}>Страница не найдена</Typography>
				<Button variant={'contained'} onClick={() => (location.href = '/')}>
					<Typography>На главную</Typography>
				</Button>
			</Box>
		</Container>
	);
};
