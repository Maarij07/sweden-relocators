'use client';

import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  Collapse,
  Avatar,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { Iconify } from '@/components/iconify';

// Navigation items configuration
const navItems = [
  {
    title: 'Dashboard',
    icon: 'solar:home-2-bold-duotone',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'User',
    icon: 'solar:users-group-two-rounded-bold-duotone', 
    children: [
      { title: 'Profile', path: '/user/profile' },
      { title: 'Cards', path: '/user/cards' },
      { title: 'List', path: '/user/list' },
      { title: 'Create', path: '/user/create' },
      { title: 'Edit', path: '/user/edit' },
      { title: 'Account', path: '/user/account' },
    ]
  },
  {
    title: 'Product',
    icon: 'solar:box-bold-duotone',
    children: [
      { title: 'List', path: '/product/list' },
      { title: 'Details', path: '/product/details' },
      { title: 'Create', path: '/product/create' },
      { title: 'Edit', path: '/product/edit' },
    ]
  },
  {
    title: 'Order',
    icon: 'solar:cart-large-2-bold-duotone',
    children: [
      { title: 'List', path: '/order/list' },
      { title: 'Details', path: '/order/details' },
    ]
  },
  {
    title: 'Invoice',
    icon: 'solar:file-text-bold-duotone',
    children: [
      { title: 'List', path: '/invoice/list' },
      { title: 'Details', path: '/invoice/details' },
      { title: 'Create', path: '/invoice/create' },
      { title: 'Edit', path: '/invoice/edit' },
    ]
  },
  {
    title: 'Blog',
    icon: 'solar:notebook-bold-duotone',
    children: [
      { title: 'Posts', path: '/blog/posts' },
      { title: 'Post', path: '/blog/post' },
      { title: 'Create', path: '/blog/create' },
    ]
  },
  {
    title: 'File Manager',
    icon: 'solar:folder-bold-duotone',
    path: '/file-manager',
  },
  {
    title: 'Mail',
    icon: 'solar:letter-bold-duotone',
    path: '/mail',
    info: '2',
  },
  {
    title: 'Chat',
    icon: 'solar:chat-round-dots-bold-duotone',
    path: '/chat',
  },
  {
    title: 'Calendar',
    icon: 'solar:calendar-bold-duotone',
    path: '/calendar',
  },
  {
    title: 'Kanban',
    icon: 'solar:checklist-minimalistic-bold-duotone',
    path: '/kanban',
  },
];

const DRAWER_WIDTH = 280;

export default function DashboardSidebar({ open = true, onClose }) {
  const theme = useTheme();
  const [openItems, setOpenItems] = useState({});

  const handleItemClick = (title) => {
    setOpenItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const NavItem = ({ item, level = 0 }) => {
    const isOpen = openItems[item.title];
    const hasChildren = item.children && item.children.length > 0;

    return (
      <>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => hasChildren ? handleItemClick(item.title) : null}
              sx={{
                minHeight: 48,
                pl: level === 0 ? 2 : 4,
                pr: 2,
                borderRadius: 1,
                mx: 1,
                mb: 0.5,
                backgroundColor: item.active ? alpha(theme.palette.primary.main, 0.12) : 'transparent',
                color: item.active ? theme.palette.primary.main : theme.palette.text.secondary,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  color: theme.palette.primary.main,
                },
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  color: 'inherit',
                }}
              >
                <Iconify icon={item.icon} width={24} />
              </ListItemIcon>

              <ListItemText 
                primary={item.title} 
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: '0.875rem',
                    fontWeight: item.active ? 600 : 500,
                  }
                }}
              />

              {item.info && (
                <Box
                  sx={{
                    minWidth: 22,
                    height: 22,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.error.main,
                    borderRadius: '50%',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: theme.palette.error.contrastText,
                  }}
                >
                  {item.info}
                </Box>
              )}

              {hasChildren && (
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Iconify 
                    icon="eva:arrow-ios-forward-fill" 
                    width={16}
                    sx={{ ml: 1 }}
                  />
                </motion.div>
              )}

              {item.active && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: 3,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '1.5px',
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        </motion.div>

        {hasChildren && (
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <List component="div" disablePadding>
                  {item.children.map((child, index) => (
                    <NavItem key={child.title || index} item={child} level={1} />
                  ))}
                </List>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </>
    );
  };

  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.paper,
          borderRight: `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        {/* Logo Section */}
        <Box sx={{ p: 3, pb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  mr: 2,
                }}
              >
                <Typography variant="h6" color="white" sx={{ fontWeight: 800 }}>
                  M
                </Typography>
              </Avatar>
            </motion.div>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                color: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Minimal UI
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: alpha(theme.palette.grey[500], 0.12) }} />

        {/* Navigation Items */}
        <List sx={{ px: 1, py: 2 }}>
          {navItems.map((item, index) => (
            <NavItem key={item.title || index} item={item} />
          ))}
        </List>

        {/* Bottom Section */}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ p: 3 }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)} 0%, ${alpha(theme.palette.secondary.main, 0.15)} 100%)`,
                }
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                Upgrade to Pro
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Get 1 year free updates & premium support
              </Typography>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '100%',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                Upgrade Now
              </motion.button>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Drawer>
  );
}
