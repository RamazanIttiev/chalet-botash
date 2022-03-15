import React from 'react';
import Typography from '../components/Typography';
import PromoLayout from './PromoLayout';
import HeroBgr from '../assets/road-street-highway-travel.jpeg';

export default function Promo() {
  return (
    <PromoLayout
      sxBackground={{
        backgroundImage: `url(${HeroBgr})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={HeroBgr} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: 4 }}>
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </PromoLayout>
  );
}
