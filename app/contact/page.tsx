import React from 'react';
import Contact from '../../components/Contact';
import { Container, Box } from '@mui/material';

export default function ContactPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 15 }}>
        <Contact />
      </Box>
    </Container>
  );
}
