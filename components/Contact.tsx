"use client";

import React from 'react';
import { Box, Typography, Button, Stack, Link } from '@mui/material';
import Image from 'next/image';

const Contact = () => {
  return (
    <Box component="section" className="section contact" sx={{ maxWidth: '600px', mx: 'auto', mb: '100px', textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={{ color: '#64ffda', fontFamily: 'var(--font-mono)', mb: 2 }}>
        What&apos;s Next?
      </Typography>
      <Typography variant="h2" sx={{ fontSize: 'clamp(40px, 5vw, 60px)', mb: 2, color: '#e6f1ff', fontWeight: 600 }}>
        Get In Touch
      </Typography>
      <Typography variant="body1" sx={{ color: '#8892b0', fontSize: '1.1rem', mb: 4 }}>
        I&apos;m currently looking for new opportunities as a Software Engineer.
        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </Typography>

      <Stack direction="row" spacing={4} justifyContent="center" alignItems="center" sx={{ mb: 6 }}>
        <Link href="mailto:bellaapries0144@gmail.com" sx={{ display: 'flex', alignItems: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-3px)' } }}>
          <Image src="/icons/gmail.png" alt="Email" width={40} height={40} style={{ width: '40px', height: 'auto' }} />
        </Link>
        <Link href="https://linkedin.com/in/bella-apries-6580782b7/" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-3px)' } }}>
          <Image src="/icons/linkedin.png" alt="LinkedIn" width={40} height={40} style={{ width: '40px', height: 'auto' }} />
        </Link>
        <Link href="https://wa.me/628115788000" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-3px)' } }}>
          <Image src="/icons/whatsapp.png" alt="WhatsApp" width={40} height={40} style={{ width: '40px', height: 'auto' }} />
        </Link>
      </Stack>

      <Button 
        variant="outlined" 
        href="mailto:bellaapries0144@gmail.com"
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
        Say Hello
      </Button>
      

    </Box>
  );
};

export default Contact;
