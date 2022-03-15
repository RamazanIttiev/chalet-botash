import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Instagram, Telegram, WhatsApp } from '@mui/icons-material';
import { FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Typography from '../components/Typography';

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  color: 'black',
  mr: 1,
  '&:hover': {
    backgroundColor: 'warning.dark',
  },
};

export const Footer = () => {
  const { i18n } = useTranslation();
  const [value, setValue] = useState(localStorage.getItem('i18nextLng'));

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleClick = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <Typography
      component="footer"
      marked="center"
      sx={{ backgroundColor: 'secondary.light', flexShrink: 0 }}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={6} display={'flex'} alignItems={'center'}>
          <Grid
            container
            spacing={4}
            sx={{ p: '24px 0', alignItems: 'center', flexDirection: 'column' }}
          >
            <Grid item xs={12} sm={3} md={6} display={'flex'} justifyContent={'center'}>
              <Box component="a" href="https://mui.com/" sx={iconStyle}>
                <WhatsApp />
              </Box>
              <Box component="a" href="https://twitter.com/MaterialUI" sx={iconStyle}>
                <Instagram />
              </Box>
              <Box component="a" href="https://twitter.com/MaterialUI" sx={iconStyle}>
                <Telegram />
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={6}>
              <Typography variant="h6" marked="center" textAlign="center" gutterBottom>
                Language
              </Typography>
              <FormGroup>
                <RadioGroup
                  defaultValue={value}
                  value={value}
                  onChange={handleChange}
                  sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                >
                  <FormControlLabel
                    value="ru"
                    onClick={() => handleClick('ru')}
                    control={<Radio />}
                    label="Rus"
                  />
                  <FormControlLabel
                    value="en"
                    onClick={() => handleClick('en')}
                    control={<Radio />}
                    label="Eng"
                  />
                </RadioGroup>
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} height={'300px'}>
          <iframe
            title="map"
            style={{ width: '100%', height: '100%' }}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e597e3c79a2b4b486ac6ca42db3d58366ac61a7cb8637070690816f1c9d99fc&amp;source=constructor"
            frameBorder="0"
          />
        </Grid>
      </Grid>
    </Typography>
  );
};
