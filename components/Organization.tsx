"use client";

import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Chip, CardMedia } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Organization = () => {
  return (
    <Box component="section" className="section organization" sx={{ maxWidth: '100%', mx: 'auto', mb: 4 }}>
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
        Organization Experience
      </Typography>
      
      <Card 
        className="orgWrapper"
        sx={{ 
          bgcolor: '#112240', 
          color: '#8892b0', 
          borderRadius: 1, 
          boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
          border: 'none',
          marginBottom: 4,
          overflow: 'hidden',
          transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
          '&:hover': {
            transform: 'translateY(-5px)',
          }
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image="/images/techno-team.jpg"
          alt="TECHNO Team"
          sx={{ 
            objectFit: 'cover',
            opacity: 0.8,
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 1
            }
          }}
        />
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1, flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography variant="h5" sx={{ color: '#ccd6f6', fontWeight: 600, fontSize: '1.2rem' }}>
                TECHNO (Himpunan Teknologi Informatika)
              </Typography>
              <Typography variant="body1" sx={{ color: '#64ffda', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', mt: 1, mb: 1 }}>
                Head of visualization division
              </Typography>
            </Box>
            <Chip 
              label="March 2023 - March 2024" 
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
                primary={<Typography variant="body1" sx={{ color: '#8892b0', fontSize: '1rem' }}>Successfully held a welcoming party School of Computer Science event with 800 participants</Typography>} 
              />
            </ListItem>
            <ListItem alignItems="flex-start" sx={{ pl: 0, pb: 1 }}>
              <ListItemIcon sx={{ minWidth: '25px', mt: 0.5 }}>
                <ArrowRightIcon sx={{ color: '#64ffda' }} />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body1" sx={{ color: '#8892b0', fontSize: '1rem' }}>Responsible for the idea, stuff, and storyline of the visualization</Typography>} 
              />
            </ListItem>
            <ListItem alignItems="flex-start" sx={{ pl: 0, pb: 0 }}>
              <ListItemIcon sx={{ minWidth: '25px', mt: 0.5 }}>
                <ArrowRightIcon sx={{ color: '#64ffda' }} />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body1" sx={{ color: '#8892b0', fontSize: '1rem' }}>Coordinate every visualization committee to carrying out their duties on time according to the rundown</Typography>} 
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Organization;
