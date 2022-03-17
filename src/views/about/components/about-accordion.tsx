import Typography from '../../../components/Typography';
import React, { FC } from 'react';

import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { ArrowForwardIosSharp } from '@mui/icons-material';

import { styled } from '@mui/material/styles';

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
	({ theme }) => ({
		width: '100%',
		backgroundColor: 'transparent',
		border: `1px solid ${theme.palette.divider}`,
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			display: 'none',
		},
	}),
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'transparent',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
	background: 'rgba(0,0,0,0.1)',
}));

interface CustomAccordionProps {
	title: string;
	text: string;
}

export const CustomAccordion: FC<CustomAccordionProps> = ({ title, text }) => {
	return (
		<Accordion>
			<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
				{title}
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{text}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};
