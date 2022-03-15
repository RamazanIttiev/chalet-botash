import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Trans, useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import Typography from '../../components/Typography';
import { valuesData } from './values.model';
import { CustomAccordion } from './Values-accordion';

export const Values = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', backgroundColor: 'secondary.light', p: '81px 0' }}
    >
      <Container sx={{ display: 'flex', position: 'relative', backgroundColor: 'secondary.light' }}>
        <Grid
          container
          spacing={5}
          sx={{
            flexDirection: 'column',
            flexWrap: 'nowrap',
            alignItems: 'center',
          }}
        >
          {valuesData.map(({ title, icon, description }, index) => {
            return (
              <Grid
                item
                xs={12}
                md={9}
                sx={{
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'space-between',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                <Box
                  component={'img'}
                  src={icon}
                  alt={title}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '100%',
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    ml: index % 2 === 0 ? 6 : 'none',
                    mr: index % 2 === 0 ? 'none' : 6,
                  }}
                >
                  <Typography variant="h6" sx={{ my: 5 }}>
                    <Trans i18nKey={`values.${title}.block.title`}>
                      {t(`values.${title}.block.title`)}
                    </Trans>
                  </Typography>
                  {title !== 'facilities' ? (
                    <Typography variant="h5" fontSize={16} lineHeight={1.6} textAlign={'center'}>
                      <Trans i18nKey={`values.${title}.block.text`}>
                        {t(`values.${title}.block.text`)}
                      </Trans>{' '}
                    </Typography>
                  ) : (
                    description?.map(({ title, text }) => {
                      return <CustomAccordion title={title} text={text} />;
                    })
                  )}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
