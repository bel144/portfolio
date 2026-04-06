"use client";

import React from 'react';
import { Typography, Card, CardProps, Theme, SxProps } from '@mui/material';

export const SectionHeading = ({ title, sx }: { title: string, sx?: SxProps<Theme> }) => (
  <Typography 
    variant="h4" 
    className="section-heading" 
    sx={{ 
      color: '#ccd6f6', 
      fontWeight: 600, 
      mb: 4, 
      display: 'flex', 
      alignItems: 'center',
      fontSize: 'clamp(26px, 5vw, 32px)',
      ...sx
    }}
  >
    <span style={{ color: '#64ffda', fontFamily: 'var(--font-mono)', marginRight: '10px', fontSize: 'clamp(16px, 3vw, 20px)' }}>*</span> 
    {title}
  </Typography>
);

export const BaseCard: React.FC<CardProps> = ({ sx, children, ...props }) => (
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
      },
      ...sx
    }}
    {...props}
  >
    {children}
  </Card>
);
