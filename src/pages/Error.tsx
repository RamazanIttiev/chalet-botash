import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { SentimentDissatisfied } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      sx={{ flexGrow: 1, p: 3 }}
    >
      <Typography sx={{ fontSize: 20 }}>Похоже, что такой страницы нет</Typography>
      <SentimentDissatisfied sx={{ width: 144, height: 144, my: 2 }} />
      <Button
        onClick={handleClick}
        sx={{ background: '#ffc071', '&:hover': { background: '#ffb25e' } }}
      >
        Перейти на главную
      </Button>
    </Box>
  );
}

export default Error;
