'use client';

import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { motion } from 'framer-motion';

interface ChartData {
  name: string;
  value: number;
  fullValue: number;
}

interface AnimatedChartProps {
  data: ChartData[];
  type?: 'pie' | 'bar';
}

export function AnimatedChart({ data, type = 'bar' }: AnimatedChartProps) {
  const [animatedData, setAnimatedData] = useState(data.map(item => ({ ...item, value: 0 })));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedData(data.map(item => ({ ...item, value: item.fullValue })));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, data]);

  if (type === 'pie') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsVisible(true)}
        className="w-full h-64"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={animatedData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
              animationBegin={0}
              animationDuration={2000}
            >
              {animatedData.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index % 2 === 0 ? '#000000' : '#666666'} 
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="w-full h-64"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={animatedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#374151' }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#374151' }}
            domain={[0, 100]}
          />
          <Bar 
            dataKey="value" 
            fill="#000000"
            animationBegin={0}
            animationDuration={2000}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

// Individual Progress Chart Component - Horizontal Bar Style
interface ProgressChartProps {
  title: string;
  percentage: number;
  delay?: number;
}

export function ProgressChart({ title, percentage, delay = 0 }: ProgressChartProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedValue(percentage);
      }, delay * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="space-y-2"
    >
      {/* Title and Percentage */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-900">{title}</span>
        <span className="text-sm font-bold text-gray-900">{percentage}%</span>
      </div>
      
      {/* Animated Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div 
          className="h-full rounded-full bg-black"
          initial={{ width: '0%' }}
          animate={{ width: isVisible ? `${animatedValue}%` : '0%' }}
          transition={{
            duration: 1.5,
            delay: delay * 0.2,
            ease: "easeOut"
          }}
        />
      </div>
    </motion.div>
  );
}
