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
		padding: '20px 0',
		fontSize: 16,
		letterSpacing: 4,
		position: 'relative',
		cursor: 'pointer',

		'&:hover:before': {
			content: '""',
			width: '90%',
			height: 3,
			position: 'absolute',
			left: '50%',
			bottom: 0,
			background: '#fff',
			transform: 'translate(-50%)',
		},

		'&::after': {
			content: props.activeTab ? '""' : 'unset',
			width: '90%',
			height: 3,
			position: 'absolute',
			left: '50%',
			bottom: 0,
			background: '#fff',
			transform: 'translate(-50%)',
		},
	};
});
