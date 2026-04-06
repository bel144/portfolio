"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Typography, Button, Container, Stack } from '@mui/material';

const Hero = () => {
  return (
    <Box component="section" className="section hero" sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', pt: 0 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column-reverse', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={5}>
          <Box sx={{ flex: 1, maxWidth: '600px' }}>
            <Typography variant="body1" className="intro" sx={{ color: '#64ffda', fontFamily: 'var(--font-mono)', mb: 2 }}>
              Hi, my name is
            </Typography>
            <Typography variant="h1" className="name" sx={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 600, color: '#e6f1ff', lineHeight: 1.1, mb: 1 }}>
              Bella Apries.
            </Typography>
            <Typography variant="h2" className="role" sx={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 600, color: '#8892b0', lineHeight: 1.1, mb: 3 }}>
              I build scalable, data-intensive web apps.
            </Typography>
            <Typography variant="body1" className="description" sx={{ color: '#8892b0', fontSize: '1.1rem', maxWidth: '540px', mb: 5 }}>
              I am a final-year Computer Science student at BINUS University with hands-on experience in full-stack web development. 
              I specialize in building scalable, performance-oriented applications using 
              <span style={{ color: '#64ffda' }}> Next.js</span>, 
              <span style={{ color: '#64ffda' }}> TypeScript</span>, and 
              <span style={{ color: '#64ffda' }}> PostgreSQL</span>. 
              Currently, my focus is on designing efficient backend logic, optimizing data-intensive systems, and developing scalable system architectures.
            </Typography>
            
            <Button
              variant="outlined"
              href="mailto:bellaapries0144@gmail.com"
              className="cta"
              sx={{
                color: '#64ffda',
                borderColor: '#64ffda',
                padding: '1.25rem 1.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderColor: '#64ffda',
                }
              }}
            >
              Get In Touch
            </Button>
          </Box>
          
          <Box className="hero-image" sx={{ flex: '0 0 auto', position: 'relative', ml: { md: 5 } }}>
            <Box className="image-wrapper" sx={{ 
              position: 'relative', 
              width: '300px', 
              height: '300px',
              '&:hover .profile-img': {
                transform: 'translate(-5px, -5px)',
              }
            }}>
              <Image 
                src="/profile.png" 
                alt="Bella Apries" 
                width={300} 
                height={300} 
                priority
                className="profile-img"
                style={{ borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto', display: 'block', transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)' }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
