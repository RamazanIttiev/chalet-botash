import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { AboutDataProps } from '../about.model';
import { Services } from '../components/about';
import LocationImg from '../assets/House2.jpg';
import HouseImg from '../assets/House2.jpg';
import FacilitiesImg from '../assets/House2.jpg';
import { useTranslation } from 'react-i18next';

export const AboutContainer = () => {
	// const [information, setServices] = useState<InformationDataProps[]>(informationData);
	//
	// useEffect(() => {
	// 	setServices(informationData);
	// }, []);

	const { t } = useTranslation();
	const informationData: AboutDataProps[] = [
		{
			title: 'location',
			icon: LocationImg,
		},
		{
			title: 'chalet',
			icon: HouseImg,
		},
		{
			title: 'facilities',
			description: [
				{
					title: t('values.facilities.block.description.rooms.title'),
					text: t('values.facilities.block.description.rooms.text'),
				},
				{
					title: t('values.facilities.block.description.food.title'),
					text: t('values.facilities.block.description.food.text'),
				},
				{
					title: t('values.facilities.block.description.entertainment.title'),
					text: t('values.facilities.block.description.entertainment.text'),
				},
			],
			icon: FacilitiesImg,
		},
	];
	return (
		<Box
			id="about"
			component="section"
			sx={{
				display: 'flex',
				overflow: 'hidden',
				backgroundColor: 'secondary.light',
				p: '81px 0',
			}}>
			<Container
				sx={{
					display: 'flex',
					position: 'relative',
					backgroundColor: 'secondary.light',
				}}>
				<Grid
					container
					spacing={5}
					sx={{
						flexDirection: 'column',
						flexWrap: 'nowrap',
						alignItems: 'center',
					}}>
					<Services information={informationData} />
				</Grid>
			</Container>
		</Box>
	);
};