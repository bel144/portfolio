import React from 'react';
import Projects from '../../components/Projects';
import { Container, Box } from '@mui/material';

export default function ProjectsPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8 }}>
        <Projects />
      </Box>
    </Container>
  );
}
