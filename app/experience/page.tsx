import React from 'react';
import Experience from '../../components/Experience';
import { Container, Box } from '@mui/material';

export default function ExperiencePage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8 }}>
        <Experience />
      </Box>
    </Container>
  );
}
