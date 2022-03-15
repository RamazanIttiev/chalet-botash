import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper';
import { useTranslation } from 'react-i18next';
import { galleryData } from './galary.model';
import Box from '@mui/material/Box';

export const Gallery = () => {
  const { t } = useTranslation();
  return (
    <Container component="section" sx={{ p: '64px 0' }}>
      <Typography variant="h4" align="center" component="h2" mb={8}>
        {t('gallery.title')}
      </Typography>
      <Swiper
        direction={'horizontal'}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        mousewheel={true}
        loop={true}
        navigation={true}
        grabCursor={true}
        modules={[Mousewheel, Navigation]}
        className="mySwiper"
      >
        {galleryData.map(({ title, image }) => {
          return (
            <SwiperSlide>
              <Box
                component={'img'}
                src={image}
                alt={title}
                sx={{
                  width: 500,
                  height: 500,
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};
