"use client";

import React from 'react';
import { Box, Typography, Container, Stack, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center', mt: 'auto', bgcolor: 'transparent' }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 2 }}>
          <Link href="https://github.com/bellaapries" target="_blank" rel="noopener noreferrer" sx={{ color: '#a8b2d1', transition: 'all 0.25s', '&:hover': { color: '#64ffda', transform: 'translateY(-3px)' } }}>
            <GitHubIcon />
          </Link>
          <Link href="https://linkedin.com/in/bella-apries-6580782b7" target="_blank" rel="noopener noreferrer" sx={{ color: '#a8b2d1', transition: 'all 0.25s', '&:hover': { color: '#64ffda', transform: 'translateY(-3px)' } }}>
            <LinkedInIcon />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#a8b2d1', transition: 'all 0.25s', '&:hover': { color: '#64ffda', transform: 'translateY(-3px)' } }}>
            <InstagramIcon />
          </Link>
        </Stack>
        <Typography variant="body2" sx={{ fontFamily: 'var(--font-mono)', color: '#a8b2d1', fontSize: '0.8rem' }}>
          Designed & Built by Bella Apries
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
