"use client";

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Box, Button, Container } from '@mui/material';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'rgba(10, 25, 47, 0.85)', backdropFilter: 'blur(10px)', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'flex-end', minHeight: '80px' }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                href={item.path}
                sx={{ 
                  color: '#ccd6f6', 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.9rem',
                  mx: 1,
                  '&:hover': {
                    color: '#64ffda',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
