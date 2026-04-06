"use client";

import React from 'react';
import { Box, Typography, CardContent, Stack } from '@mui/material';
import { SectionHeading, BaseCard } from './SharedUI';

const Projects = () => {
  return (
    <Box component="section" className="section projects" sx={{ maxWidth: '1000px', mx: 'auto', mb: 10 }}>
      <SectionHeading title="Some Things I've Built" />

      <BaseCard>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box>
              <Typography variant="overline" sx={{ color: '#64ffda', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', display: 'block', mb: 1 }}>
                Featured Project
              </Typography>
              <Typography variant="h5" sx={{ color: '#ccd6f6', fontWeight: 600, fontSize: 'clamp(24px, 5vw, 28px)', mb: 1 }}>
                OmniKasir – Integrated POS & E-commerce System (Thesis Project)
              </Typography>
            </Box>
            <Box 
              component="img"
              src="/icons/omnikasir.png"
              alt="Omnikasir Logo"
              sx={{ 
                width: '60px', 
                height: 'auto',
                filter: 'grayscale(100%) contrast(1) brightness(1.2)', 
                transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                '&:hover': {
                    filter: 'none',
                },
                ml: 2
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ color: '#a8b2d1', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', mb: 3 }}>
            Project Manager & Lead Analyst | February 2025 - March 2026
          </Typography>

          <Box sx={{ 
            bgcolor: '#172a45', 
            p: 3, 
            borderRadius: 1, 
            mb: 3, 
            boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)' 
          }}>
            <ul style={{ paddingLeft: '20px', margin: 0, color: '#a8b2d1' }}>
              <li style={{ marginBottom: '10px' }}>Spearheaded the development of a POS system integrated with E-commerce platforms, focused on providing digitalization solutions for UMKM.</li>
              <li style={{ marginBottom: '10px' }}>Managed the end-to-end project lifecycle, from defining system requirements to conducting final usability and performance evaluations.</li>
              <li style={{ marginBottom: '10px' }}>Collaborated on technical specifications, including stock synchronization logic and transaction data flow between offline and online channels.</li>
              <li>Analyzed survey data regarding user interface satisfaction and transaction speed to ensure the product met user needs.</li>
            </ul>
          </Box>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
            {['Next.js', 'TypeScript', 'PostgreSQL'].map((tech) => (
              <Typography key={tech} variant="body2" sx={{ color: '#a8b2d1', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                {tech}
              </Typography>
            ))}
          </Stack>
        </CardContent>
      </BaseCard>
      
    </Box>
  );
};

export default Projects;
