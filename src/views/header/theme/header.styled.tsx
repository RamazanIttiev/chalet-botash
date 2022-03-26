import React from 'react';
import { styled } from '@mui/material/styles';
import { Link, LinkProps } from '@mui/material';

export const LinkStyled = styled((props: LinkProps) => (
	<Link {...props} variant="h6" underline="none" color="inherit" />
))(() => ({
	p: '20px 0',
	fontSize: 16,
	letterSpacing: 4,
	position: 'relative',
	cursor: 'pointer',
}));
