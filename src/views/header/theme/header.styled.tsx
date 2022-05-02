import styled from 'styled-components';
import { Link, LinkProps } from '@mui/material';

interface LinkStyleProps extends LinkProps {
	activeTab?: boolean;
}

export const LinkStyled = styled(Link).attrs({
	variant: 'h6',
	underline: 'none',
	color: 'inherit',
})<LinkStyleProps>(props => {
	return {
		padding: '10px 0',
		fontSize: 16,
		letterSpacing: 4,
		cursor: 'pointer',
		position: 'relative',
		backgroundImage: 'linear-gradient(transparent 0%,transparent 90%,#fff7ed 90%,#fff7ed 100%)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '0% 100%',
		backgroundPositionX: 'right',
		transition: 'background-size 300ms',

		'&:hover': {
			backgroundSize: '100% 100%',
			backgroundPositionX: 'left',
		},

		'&::after': {
			content: '""',
			width: props.activeTab ? '100%' : 0,
			height: '5px',
			backgroundColor: '#fff7ed',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '0% 100%',
			backgroundPositionX: 'right',
			position: 'absolute',
			bottom: 0,
			right: 0,
		},
	};
});
