import { styled } from '@mui/styles';
import { ButtonBase } from '@mui/material';
import { Theme } from '@mui/system';

export const ImageBackdrop = styled('div')(() => ({
	content: "''",
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	background: '#000',
	opacity: 0.5,
}));

export const ImageIconButton = styled(ButtonBase)(({ theme }: { theme: Theme }) => ({
	position: 'relative',
	display: 'block',
	padding: 0,
	borderRadius: 0,
	height: '40vh',
	[theme.breakpoints.down('md')]: {
		height: '300px',
	},
	'&:hover': {
		zIndex: 1,
	},
	'&:hover .imageBackdrop': {
		opacity: 0,
	},
	'&:hover .imageMarked': {
		opacity: 0.15,
	},
	'&:hover .imageTitle': {
		border: '4px solid currentColor',
	},
	'& .imageTitle': {
		position: 'relative',
		padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
	},
	'& .imageMarked': {
		height: 3,
		width: 18,
		background: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
	},
}));
