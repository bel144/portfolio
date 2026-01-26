"use client";

import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Skills = () => {
  const skills = {
    "Software Skills": [
      "Languages & Frameworks: TypeScript, JavaScript, HTML, CSS, Java, PL/pgSQL, and JSONB data handling",
      "Frontend: React, Next.js",
      "Backend & Database: PostgreSQL, MySQL, Supabase, RPC (PL/pgSQL)",
      "Tools: Git, Visual Studio Code, Figma"
    ],
    "Language Skills": [
      "Indonesian (Native)",
      "English (Professional working proficiency)"
    ],
    "Soft Skills": [
      "Problem-solving",
      "Team collaboration",
      "Technical documentation",
      "Effective communication"
    ]
  };

  return (
    <Box component="section" className="section skills" sx={{ maxWidth: '900px', mx: 'auto', mb: 10 }}>
       <Typography 
        variant="h4" 
        className="section-heading" 
        sx={{ 
          color: '#ccd6f6', 
          fontWeight: 600, 
          mb: 5, 
          display: 'flex', 
          alignItems: 'center',
          fontSize: 'clamp(26px, 5vw, 32px)'
        }}
      >
        <span style={{ color: '#64ffda', fontFamily: 'var(--font-mono)', marginRight: '10px', fontSize: 'clamp(16px, 3vw, 20px)' }}>*</span> 
        Personal Skills
      </Typography>
      
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
        {Object.entries(skills).map(([category, items]) => (
          <Box key={category} sx={{ gridColumn: category === "Software Skills" ? { xs: 'span 1', md: 'span 2' } : 'span 1' }}>
            <Card 
              sx={{ 
                bgcolor: '#112240', 
                color: '#8892b0', 
                height: '100%',
                borderRadius: 1, 
                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                border: 'none',
                transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ color: '#64ffda', fontFamily: 'var(--font-mono)', mb: 2, fontSize: '1.1rem' }}>
                  {category}:
                </Typography>
                <List dense sx={{ p: 0 }}>
                  {items.map((skill, index) => (
                    <ListItem key={index} alignItems="flex-start" sx={{ pl: 0, pb: 1 }}>
                      <ListItemIcon sx={{ minWidth: '20px', mt: 0.5 }}>
                        <ArrowRightIcon sx={{ color: '#64ffda', fontSize: '1rem' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={<Typography variant="body2" sx={{ color: '#8892b0', fontSize: '0.95rem' }}>{skill}</Typography>} 
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
