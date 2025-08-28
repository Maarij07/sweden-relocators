'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  TextField,
  InputAdornment,
  Avatar,
  Badge,
  Typography,
  Menu,
  MenuItem,
  Divider,
  Stack,
  Button,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Iconify } from '@/components/iconify';

const HEADER_HEIGHT = 64;

export default function DashboardHeader({ onMenuClick }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchor(null);
  };

  const notifications = [
    {
      id: 1,
      title: 'Your order is placed',
      description: 'waiting for shipping',
      time: '2 hours ago',
      type: 'order',
      avatar: '/assets/icons/ic_notification_package.svg',
      isUnRead: true,
    },
    {
      id: 2,
      title: 'Sylvan King',
      description: 'answered to your comment on the Minimal',
      time: '3 hours ago',
      type: 'friend',
      avatar: '/assets/images/avatars/avatar_2.jpg',
      isUnRead: true,
    },
    {
      id: 3,
      title: 'You have new message',
      description: '5 unread messages',
      time: '1 day ago',
      type: 'mail',
      avatar: '/assets/icons/ic_notification_mail.svg',
      isUnRead: false,
    },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        height: HEADER_HEIGHT,
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: alpha(theme.palette.background.default, 0.8),
        backdropFilter: 'blur(6px)',
        borderBottom: `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
        boxShadow: 'none',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: alpha(theme.palette.background.default, 0.8),
          backdropFilter: 'blur(6px)',
          zIndex: -1,
        }
      }}
    >
      <Toolbar sx={{ height: HEADER_HEIGHT, px: { sm: 3 } }}>
        {/* Menu Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <IconButton
            onClick={onMenuClick}
            sx={{
              mr: 1,
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
              }
            }}
          >
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>
        </motion.div>

        {/* Search */}
        <Box sx={{ flexGrow: 1, mx: 2, maxWidth: 400 }}>
          <TextField
            fullWidth
            placeholder="Search..."
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify 
                    icon="eva:search-fill" 
                    sx={{ color: theme.palette.text.disabled }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: alpha(theme.palette.grey[500], 0.08),
                borderRadius: 1.5,
                transition: 'all 0.3s ease',
                '& fieldset': {
                  border: 'none',
                },
                '&:hover': {
                  backgroundColor: alpha(theme.palette.grey[500], 0.12),
                },
                '&.Mui-focused': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                },
              },
              '& .MuiInputBase-input': {
                '&::placeholder': {
                  color: theme.palette.text.disabled,
                  opacity: 1,
                }
              }
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Language Selector */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconButton
              sx={{
                width: 40,
                height: 40,
                color: theme.palette.text.primary,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                }
              }}
            >
              <Box
                component="img"
                src="https://flagcdn.com/w20/us.png"
                alt="en"
                sx={{
                  width: 20,
                  height: 15,
                  borderRadius: 0.5,
                }}
              />
            </IconButton>
          </motion.div>

          {/* Fullscreen Toggle */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconButton
              sx={{
                width: 40,
                height: 40,
                color: theme.palette.text.primary,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                }
              }}
            >
              <Iconify icon="eva:expand-fill" />
            </IconButton>
          </motion.div>

          {/* Notifications */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconButton
              onClick={handleNotificationClick}
              sx={{
                width: 40,
                height: 40,
                color: theme.palette.text.primary,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                }
              }}
            >
              <Badge badgeContent={2} color="error">
                <Iconify icon="solar:bell-bold-duotone" />
              </Badge>
            </IconButton>
          </motion.div>

          {/* User Avatar */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <IconButton 
              onClick={handleProfileClick}
              sx={{ p: 0, ml: 1 }}
            >
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              >
                JD
              </Avatar>
            </IconButton>
          </motion.div>
        </Box>

        {/* User Profile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              ml: 0.75,
              width: 200,
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[24],
            }
          }}
        >
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle2" noWrap>
              John Doe
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              john.doe@example.com
            </Typography>
          </Box>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <MenuItem onClick={handleProfileClose} sx={{ typography: 'body2', py: 1, px: 2.5 }}>
            <Iconify icon="eva:person-fill" sx={{ mr: 2 }} />
            Profile
          </MenuItem>

          <MenuItem onClick={handleProfileClose} sx={{ typography: 'body2', py: 1, px: 2.5 }}>
            <Iconify icon="eva:settings-2-fill" sx={{ mr: 2 }} />
            Settings
          </MenuItem>

          <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

          <MenuItem
            onClick={handleProfileClose}
            sx={{
              typography: 'body2',
              color: 'error.main',
              py: 1.5,
              px: 2.5,
            }}
          >
            <Iconify icon="eva:log-out-fill" sx={{ mr: 2 }} />
            Logout
          </MenuItem>
        </Menu>

        {/* Notifications Menu */}
        <Menu
          anchorEl={notificationAnchor}
          open={Boolean(notificationAnchor)}
          onClose={handleNotificationClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              ml: 0.75,
              width: 360,
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[24],
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1">
                Notifications
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                You have 2 unread messages
              </Typography>
            </Box>
            <IconButton size="small">
              <Iconify icon="eva:more-vertical-fill" />
            </IconButton>
          </Box>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack sx={{ height: 240, overflowY: 'auto' }}>
            {notifications.map((notification) => (
              <MenuItem
                key={notification.id}
                sx={{
                  py: 1.5,
                  px: 2.5,
                  backgroundColor: notification.isUnRead 
                    ? alpha(theme.palette.primary.main, 0.08)
                    : 'transparent',
                }}
              >
                <Avatar sx={{ mr: 2, bgcolor: 'primary.light' }}>
                  <Iconify icon="eva:bell-fill" />
                </Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2">
                    {notification.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {notification.description}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    {notification.time}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Stack>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Box sx={{ p: 1 }}>
            <Button fullWidth disableRipple>
              View All
            </Button>
          </Box>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
