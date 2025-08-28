'use client';

import React, { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';

const HEADER_HEIGHT = 64;
const DRAWER_WIDTH = 280;

export default function DashboardLayout({ children }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Header */}
      <DashboardHeader onMenuClick={handleToggleSidebar} />

      {/* Sidebar */}
      <DashboardSidebar
        open={isDesktop ? sidebarOpen : false}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          pt: `${HEADER_HEIGHT}px`,
          pl: isDesktop && sidebarOpen ? `${DRAWER_WIDTH}px` : 0,
          transition: theme.transitions.create(['margin', 'padding'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
        }}
      >
        <Box sx={{ p: 3, minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
