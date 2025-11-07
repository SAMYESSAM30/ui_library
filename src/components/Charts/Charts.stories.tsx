import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';
import { LineChart } from './LineChart';
import { PieChart } from './PieChart';

const meta = {
  title: 'Components/Charts',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const barData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

const pieData = [
  { name: 'Group A', value: 400, percent: 40 },
  { name: 'Group B', value: 300, percent: 30 },
  { name: 'Group C', value: 300, percent: 30 },
];

export const BarChartExample: Story = {
  render: () => (
    <div className="w-full max-w-2xl h-[300px]">
      <BarChart 
        data={barData}
        dataKeys={['value']}
        colors={['#3b82f6']}
      />
    </div>
  ),
};

export const LineChartExample: Story = {
  render: () => (
    <div className="w-full max-w-2xl h-[300px]">
      <LineChart 
        data={lineData}
        dataKeys={['value']}
        colors={['#3b82f6']}
      />
    </div>
  ),
};

export const PieChartExample: Story = {
  render: () => (
    <div className="w-full max-w-md h-[400px]">
      <PieChart 
        data={pieData}
        colors={['#3b82f6', '#10b981', '#f59e0b']}
      />
    </div>
  ),
};

