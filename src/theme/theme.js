import { createTheme, alpha } from '@mui/material/styles';

// Color palette for modern website theme
export const palette = {
  mode: 'light',
  primary: {
    main: '#00A76F', // Green accent for Sweden theme
    light: '#22C55E',
    dark: '#047857',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#3B82F6', // Beautiful blue accent
    light: '#60A5FA',
    dark: '#1E40AF',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#FFFFFF', // Clean white background
    paper: '#FFFFFF', // White cards
    neutral: '#F8FAFC', // Light gray for sections
  },
  text: {
    primary: '#1F2937', // Dark gray for primary text
    secondary: '#6B7280', // Medium gray for secondary text
    disabled: '#9CA3AF',
  },
  grey: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  divider: alpha('#919EAB', 0.24),
  action: {
    hover: alpha('#919EAB', 0.08),
    selected: alpha('#919EAB', 0.16),
  },
};

// Custom shadows for light theme
export const customShadows = {
  z1: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  z4: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  z8: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  z12: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  z16: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  z20: '0 25px 50px -12px rgba(0, 0, 0, 0.2)',
  z24: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  primary: `0 8px 16px 0 ${alpha('#00A76F', 0.24)}`,
  secondary: `0 8px 16px 0 ${alpha('#3B82F6', 0.24)}`,
};

// Typography configuration
export const typography = {
  fontFamily: [
    'var(--font-public-sans)',
    'Public Sans',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  h1: {
    fontFamily: [
      'var(--font-barlow)',
      'Barlow',
      'system-ui',
      'sans-serif',
    ].join(','),
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: '2.5rem',
  },
  h2: {
    fontFamily: [
      'var(--font-barlow)',
      'Barlow',
      'system-ui',
      'sans-serif',
    ].join(','),
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: '2rem',
  },
  h3: {
    fontFamily: [
      'var(--font-barlow)',
      'Barlow',
      'system-ui',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: '1.5rem',
  },
  h4: {
    fontFamily: [
      'var(--font-barlow)',
      'Barlow',
      'system-ui',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: '1.25rem',
  },
  h5: {
    fontFamily: [
      'var(--font-barlow)',
      'Barlow',
      'system-ui',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: '1.125rem',
  },
  h6: {
    fontFamily: [
      'var(--font-barlow)',
      'Barlow',
      'system-ui',
      'sans-serif',
    ].join(','),
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: '1rem',
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: '1rem',
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: '0.875rem',
  },
  body1: {
    lineHeight: 1.5,
    fontSize: '1rem',
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: '0.875rem',
  },
  caption: {
    lineHeight: 1.5,
    fontSize: '0.75rem',
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: '0.75rem',
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: '0.875rem',
    textTransform: 'none',
  },
};

// Create the theme
export const theme = createTheme({
  palette,
  typography,
  shape: { borderRadius: 12 },
  shadows: [
    'none',
    customShadows.z1,
    customShadows.z1,
    customShadows.z4,
    customShadows.z4,
    customShadows.z8,
    customShadows.z8,
    customShadows.z8,
    customShadows.z12,
    customShadows.z12,
    customShadows.z12,
    customShadows.z12,
    customShadows.z16,
    customShadows.z16,
    customShadows.z16,
    customShadows.z16,
    customShadows.z20,
    customShadows.z20,
    customShadows.z20,
    customShadows.z20,
    customShadows.z24,
    customShadows.z24,
    customShadows.z24,
    customShadows.z24,
    customShadows.z24,
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: 8,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: customShadows.z8,
          },
        },
        sizeLarge: {
          height: 48,
          padding: '0 22px',
        },
        sizeMedium: {
          height: 40,
          padding: '0 18px',
        },
        sizeSmall: {
          height: 32,
          padding: '0 14px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: customShadows.z16,
          borderRadius: 16,
          position: 'relative',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
          backgroundColor: palette.background.paper,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '24px 24px 0',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.background.paper,
          borderRight: `1px solid ${palette.divider}`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(6px)',
        },
      },
    },
  },
});

export default theme;
