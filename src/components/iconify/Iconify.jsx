'use client';

import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

Iconify.displayName = 'Iconify';

export default Iconify;
