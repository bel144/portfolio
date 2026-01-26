"use client";

import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Experience = () => {
  return (
    <Box component="section" className="section experience" sx={{ maxWidth: '800px', mx: 'auto', mb: 10 }}>
       <Typography 
        variant="h4" 
        className="section-heading" 
        sx={{ 
          color: '#ccd6f6', 
          fontWeight: 600, 
          mb: 4, 
          display: 'flex', 
          alignItems: 'center',
          fontSize: 'clamp(26px, 5vw, 32px)'
        }}
      >
        <span style={{ color: '#64ffda', fontFamily: 'var(--font-mono)', marginRight: '10px', fontSize: 'clamp(16px, 3vw, 20px)' }}>*</span> 
        Where I&apos;ve Worked
      </Typography>
      
      <Card 
        sx={{ 
          bgcolor: '#112240', 
          color: '#8892b0', 
          borderRadius: 1, 
          boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
          border: 'none',
          transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
          '&:hover': {
            transform: 'translateY(-5px)',
          }
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h5" sx={{ color: '#ccd6f6', fontWeight: 600, fontSize: '1.3rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                  Software Developer Intern <span style={{ color: '#64ffda' }}>@ KALBE FARMA</span>
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'var(--font-mono)', color: '#a8b2d1', mt: 1, fontSize: '0.9rem' }}>
                  February 2025 - Present
                </Typography>
              </Box>
              
              <List dense sx={{ p: 0 }}>
                {[
                  "Built and maintained full-stack web applications using Next.js (TypeScript).",
                  "Designed and implemented backend logic using PostgreSQL RPC (PL/pgSQL).",
                  "Optimized queries, filtering, and pagination for large-scale data processing.",
                  "Applied SSR and streaming to improve application performance.",
                  "Worked closely with the team to debug, refactor, and document system features."
                ].map((text, index) => (
                  <ListItem key={index} alignItems="flex-start" sx={{ pl: 0, pb: 1 }}>
                    <ListItemIcon sx={{ minWidth: '25px', mt: 0.5 }}>
                      <ArrowRightIcon sx={{ color: '#64ffda' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={<Typography variant="body1" sx={{ color: '#8892b0', fontSize: '1rem' }}>{text}</Typography>} 
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box sx={{ width: { xs: '100%', md: '250px' }, flexShrink: 0 }}>
              <Box 
                component="img" 
                src="/images/internship_group.jpg" 
                alt="Kalbe Farma Team" 
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  borderRadius: 2, 
                  border: '1px solid #233554',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                  objectFit: 'cover'
                }} 
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Experience;
