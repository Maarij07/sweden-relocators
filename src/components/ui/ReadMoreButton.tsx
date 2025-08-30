'use client';

import { Button } from '@mui/material';
import { motion, Variants } from 'framer-motion';

interface ReadMoreButtonProps {
  onClick?: () => void;
  className?: string;
  variants?: Variants;
  text?: string;
}

export function ReadMoreButton({ onClick, className = "", variants, text = "Read More" }: ReadMoreButtonProps) {
  const buttonContent = (
    <Button
      variant="outlined"
      onClick={onClick}
      className={`${className}`}
      sx={{
        color: '#1F2937 !important',
        borderColor: '#D1D5DB !important',
        backgroundColor: 'transparent !important',
        fontWeight: 500,
        fontSize: '0.875rem',
        textTransform: 'none',
        padding: '8px 16px',
        height: '40px',
        borderRadius: '6px',
        minWidth: 'auto',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          borderColor: '#9CA3AF !important',
          backgroundColor: 'rgba(0, 0, 0, 0.02) !important',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          color: '#374151 !important',
        },
        '& .MuiButton-endIcon': {
          marginLeft: '8px',
          transition: 'transform 0.3s ease-in-out',
        },
        '&:hover .MuiButton-endIcon': {
          transform: 'translateX(4px)',
        },
        // Ensure proper font rendering
        fontFamily: 'var(--font-public-sans), "Public Sans", system-ui, sans-serif',
      }}
      endIcon={
        <motion.div
          whileHover={{ 
            rotate: 180,
            x: 4
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      }
    >
      {text}
    </Button>
  );

  // If variants are provided, wrap with motion.div for animations
  if (variants) {
    return (
      <motion.div variants={variants}>
        {buttonContent}
      </motion.div>
    );
  }

  return buttonContent;
}
