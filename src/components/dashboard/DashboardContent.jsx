'use client';

import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Stack,
  Button,
  Avatar,
  Chip,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Iconify } from '@/components/iconify';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Sample data
const salesData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
  { name: 'Jul', value: 349 },
];

const trafficData = [
  { name: 'Desktop', value: 4000, color: '#00A76F' },
  { name: 'Mobile', value: 3000, color: '#3B82F6' },
  { name: 'Tablet', value: 2000, color: '#FFAB00' },
];

const conversionData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

const StatCard = ({ title, value, change, icon, color, children }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card
        sx={{
          p: 3,
          background: `linear-gradient(135deg, ${alpha(theme.palette[color]?.main || color, 0.08)} 0%, ${alpha(theme.palette[color]?.light || color, 0.08)} 100%)`,
          border: `1px solid ${alpha(theme.palette[color]?.main || color, 0.12)}`,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${alpha(theme.palette[color]?.main || color, 0.03)} 0%, transparent 50%)`,
            pointerEvents: 'none',
          }
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
            {change && (
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Iconify
                  icon={change > 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'}
                  sx={{
                    color: change > 0 ? 'success.main' : 'error.main',
                    mr: 0.5,
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: change > 0 ? 'success.main' : 'error.main',
                  }}
                >
                  {Math.abs(change)}%
                </Typography>
              </Box>
            )}
          </Box>
          <Avatar
            sx={{
              bgcolor: alpha(theme.palette[color]?.main || color, 0.12),
              color: theme.palette[color]?.main || color,
              width: 64,
              height: 64,
            }}
          >
            <Iconify icon={icon} width={32} />
          </Avatar>
        </Stack>
        {children}
      </Card>
    </motion.div>
  );
};

export default function DashboardContent() {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 800 }}>
        Hi, Welcome back 👋
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Active Users"
            value="18,765"
            change={2.6}
            icon="solar:users-group-rounded-bold-duotone"
            color="primary"
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Installed"
            value="4,876"
            change={0.2}
            icon="solar:download-bold-duotone"
            color="info"
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Downloads"
            value="678"
            change={-0.1}
            icon="solar:smartphone-2-bold-duotone"
            color="warning"
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Revenue"
            value="$18,245"
            change={2.8}
            icon="solar:dollar-minimalistic-bold-duotone"
            color="success"
          />
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {/* Website Visits */}
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card sx={{ p: 3 }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Website Visits
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  (+43%) than last year
                </Typography>
              </Box>
              
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={alpha(theme.palette.grey[500], 0.12)} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      border: 'none',
                      borderRadius: 8,
                      boxShadow: theme.shadows[16],
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={theme.palette.primary.main}
                    strokeWidth={3}
                    dot={{ fill: theme.palette.primary.main, strokeWidth: 0, r: 6 }}
                    activeDot={{ r: 8, stroke: theme.palette.primary.main, strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </Grid>

        {/* Current Visits */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Current Visits
              </Typography>
              
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {trafficData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      border: 'none',
                      borderRadius: 8,
                      boxShadow: theme.shadows[16],
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <Stack spacing={2} sx={{ mt: 2 }}>
                {trafficData.map((item, index) => (
                  <Stack key={index} direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: item.color,
                        }}
                      />
                      <Typography variant="body2">{item.name}</Typography>
                    </Stack>
                    <Typography variant="subtitle2">{item.value.toLocaleString()}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Conversion Rates & News Update */}
      <Grid container spacing={3}>
        {/* Conversion Rates */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Conversion Rates
              </Typography>
              
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={alpha(theme.palette.grey[500], 0.12)} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      border: 'none',
                      borderRadius: 8,
                      boxShadow: theme.shadows[16],
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill={theme.palette.secondary.main}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </Grid>

        {/* News Update */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                News Update
              </Typography>
              
              <Stack spacing={3}>
                {[
                  {
                    title: 'Oil and Gas Stocks Outperform',
                    image: 'https://source.unsplash.com/64x64/?oil,energy',
                    time: '2 hours ago',
                  },
                  {
                    title: 'California Wildfire Smoke Chokes',
                    image: 'https://source.unsplash.com/64x64/?fire,nature',
                    time: '4 hours ago',
                  },
                  {
                    title: 'Hydrogen Fusion Breakthrough',
                    image: 'https://source.unsplash.com/64x64/?science,technology',
                    time: '6 hours ago',
                  },
                  {
                    title: 'Crypto Currency Boom',
                    image: 'https://source.unsplash.com/64x64/?bitcoin,crypto',
                    time: '8 hours ago',
                  },
                ].map((news, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Stack direction="row" spacing={2} sx={{ cursor: 'pointer' }}>
                      <Avatar
                        src={news.image}
                        sx={{ width: 48, height: 48, borderRadius: 1.5 }}
                      />
                      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            fontWeight: 600,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          {news.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {news.time}
                        </Typography>
                      </Box>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
