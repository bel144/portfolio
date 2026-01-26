import React from 'react';
import Education from '../../components/Education';
import Organization from '../../components/Organization';
import Skills from '../../components/Skills';
import { Container, Box } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8 }}>
        <Education />
        <Organization />
        <Skills />
      </Box>
    </Container>
  );
}
