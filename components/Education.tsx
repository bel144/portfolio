"use client";

import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Education = () => {
  return (
    <Box component="section" className="section education" sx={{ maxWidth: '100%', mx: 'auto', mb: 4 }}>
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
        Education
      </Typography>
      
      <Card 
        className="schoolWrapper"
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ color: '#ccd6f6', fontWeight: 600, fontSize: '1.3rem' }}>
                    BINUS UNIVERSITY
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#a8b2d1', mt: 0.5, fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                    Bachelor&apos;s Degree in Computer Science
                  </Typography>
                </Box>
                <Chip 
                  label="September 2022 - Present" 
                  sx={{ 
                    bgcolor: 'rgba(100, 255, 218, 0.1)', 
                    color: '#64ffda', 
                    fontFamily: 'var(--font-mono)', 
                    fontWeight: 500,
                    fontSize: '0.8rem',
                    border: '1px solid rgba(100, 255, 218, 0.2)'
                  }} 
                />
              </Box>
              
              <List dense sx={{ p: 0 }}>
                <ListItem alignItems="flex-start" sx={{ pl: 0, pb: 1 }}>
                  <ListItemIcon sx={{ minWidth: '25px', mt: 0.5 }}>
                    <ArrowRightIcon sx={{ color: '#64ffda' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography variant="body1" sx={{ color: '#8892b0', fontSize: '1rem' }}>
                        GPA : 3.58/4.0 (Seventh Semester)
                      </Typography>
                    } 
                  />
                </ListItem>
                <ListItem alignItems="flex-start" sx={{ pl: 0, pb: 0 }}>
                  <ListItemIcon sx={{ minWidth: '25px', mt: 0.5 }}>
                    <ArrowRightIcon sx={{ color: '#64ffda' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography variant="body1" sx={{ color: '#8892b0', fontSize: '1rem', lineHeight: 1.6 }}>
                        <strong style={{ color: '#ccd6f6' }}>Relevant Coursework:</strong> Algorithm & Programming, Data Structures, Object-Oriented Programming, 
                        Database Systems, Software Engineering, Algorithm Design & Analysis, Artificial Intelligence
                      </Typography>
                    } 
                  />
                </ListItem>
              </List>
            </Box>
            
            <Box sx={{ width: { xs: '100%', md: '200px' }, flexShrink: 0, display: 'flex', alignItems: 'flex-start' }}>
              <Box 
                component="img" 
                src="/images/binus_building.png" 
                alt="BINUS University" 
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  borderRadius: 2, 
                  border: '1px solid #233554',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                }} 
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Education;
