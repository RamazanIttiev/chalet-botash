export const socialMediaStyle = {
	color: 'black',
	display: 'flex',
	alignItems: 'center',
	transition: 'all 0.3s',
	textDecoration: 'none',
	justifyContent: 'center',
	'& .linkIcon': {
		mr: '8px',
		width: '40px',
		height: '40px',
		padding: '8px',
		backgroundColor: 'warning.main',

		'&:hover': {
			backgroundColor: 'warning.dark',
		},
	},
};

export const contactsStyle = {
	textDecoration: 'none',
	color: 'black',
	mb: '24px',
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
	'&last-child': {
		marginBottom: 0,
	},
};
