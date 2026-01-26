"use client";

import React from 'react';
import { Box } from '@mui/material';

const BackgroundDecor = () => {

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
        // Subtle grid pattern
        backgroundImage: `radial-gradient(#233554 1.5px, transparent 1.5px), radial-gradient(#233554 1.5px, transparent 1.5px)`,
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 15px 15px',
        opacity: 0.3, 
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(17, 34, 64, 0.8) 0%, rgba(10, 25, 47, 0) 70%)',
          filter: 'blur(60px)',
          animation: 'float 20s infinite ease-in-out',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(16, 30, 56, 0.8) 0%, rgba(10, 25, 47, 0) 70%)',
          filter: 'blur(60px)',
          animation: 'float 25s infinite ease-in-out reverse',
        },
        '@keyframes float': {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, 30px)' },
          '100%': { transform: 'translate(0, 0)' },
        }
      }}
    />
  );
};

export default BackgroundDecor;
