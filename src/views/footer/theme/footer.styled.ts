export const socialMediaStyle = {
	color: 'black',
	display: 'flex',
	alignItems: 'center',
	transition: 'all 0.3s',
	textDecoration: 'none',
	justifyContent: 'center',
	'& .linkIcon': {
		padding: '8px',
		fontSize: '40px',
		backgroundColor: 'warning.main',

		'&:hover': {
			backgroundColor: 'warning.dark',
		},
	},
	'& .linkTextGroup': {
		transition: 'all 0.3s',
	},
	'&:hover .linkTextGroup': {
		transform: 'translateX(24px)',
	},
};

export const contactsStyle = {
	textDecoration: 'none',
	color: 'black',
	mb: '16px',
	'& div': {
		mr: '16px',
		fontWeight: 'bold',
	},
	'& span': {
		borderBottom: '1px solid black',
	},
	'&:hover span': {
		borderBottom: '1px solid transparent',
	},
};
