import * as React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { cn } from '../../lib/utils';

export interface BarChartData {
  name: string;
  [key: string]: string | number;
}

export interface BarChartProps {
  data: BarChartData[];
  dataKeys: string[];
  colors?: string[];
  className?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
}

const defaultColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const BarChart: React.FC<BarChartProps> = ({
  data,
  dataKeys,
  colors = defaultColors,
  className,
  height = 300,
  showGrid = true,
  showLegend = true,
}) => {
  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {showLegend && <Legend />}
          {dataKeys.map((key, index) => (
            <Bar key={key} dataKey={key} fill={colors[index % colors.length]} />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export { BarChart };

