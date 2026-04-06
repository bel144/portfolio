"use client";

import React from 'react';
import { Box, Typography, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SectionHeading, BaseCard } from './SharedUI';

const Skills = () => {
  const skills = {
    "Software Skills": [
      "Languages: TypeScript, JavaScript, Java, SQL (PostgreSQL, MySQL)",
      "Frontend: React, Next.js, HTML, CSS, Tailwind, MUI",
      "Backend: Node.js, REST API, Supabase, PostgreSQL RPC (PL/pgSQL)",
      "Database: PostgreSQL, MySQL, JSONB",
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
      <SectionHeading title="Personal Skills" />
      
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
        {Object.entries(skills).map(([category, items]) => (
          <Box key={category} sx={{ gridColumn: category === "Software Skills" ? { xs: 'span 1', md: 'span 2' } : 'span 1' }}>
            <BaseCard sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ color: '#64ffda', fontFamily: 'var(--font-mono)', mb: 2, fontSize: '1.1rem' }}>
                  {category}:
                </Typography>
                <List dense sx={{ p: 0 }}>
                  {items.map((skill, index) => {
                    const [label, ...rest] = skill.split(':');
                    const value = rest.join(':').trim();
                    return (
                      <ListItem key={index} alignItems="flex-start" sx={{ pl: 0, pb: 1 }}>
                        <ListItemIcon sx={{ minWidth: '20px', mt: 0.5 }}>
                          <ArrowRightIcon sx={{ color: '#64ffda', fontSize: '1rem' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={
                            <Typography variant="body2" sx={{ color: '#8892b0', fontSize: '0.95rem' }}>
                              {value ? (
                                <>
                                  <strong style={{ color: '#ccd6f6' }}>{label}:</strong> {value}
                                </>
                              ) : (
                                skill
                              )}
                            </Typography>
                          } 
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </BaseCard>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
