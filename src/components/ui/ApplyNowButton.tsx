'use client';

import { Button } from '@mui/material';

interface ApplyNowButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
}

export function ApplyNowButton({ onClick, className = "", text = "Apply Now" }: ApplyNowButtonProps) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      className={className}
      sx={{
        backgroundColor: '#000000 !important',
        color: '#ffffff !important',
        fontWeight: 500,
        fontSize: '0.75rem',
        textTransform: 'none',
        padding: '6px 14px',
        height: '36px',
        borderRadius: '6px',
        minWidth: 'auto',
        border: '1px solid #000000',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          backgroundColor: '#374151 !important',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        },
        // Ensure proper font rendering
        fontFamily: 'var(--font-public-sans), "Public Sans", system-ui, sans-serif',
      }}
    >
      {text}
    </Button>
  );
}
