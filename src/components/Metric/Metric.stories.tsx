import type { Meta, StoryObj } from '@storybook/react';
import { Metric } from './Metric';
import { DollarSign, Users, TrendingUp } from 'lucide-react';

const meta: Meta<typeof Metric> = {
  title: 'Components/Metric',
  component: Metric,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Metric>;

export const Default: Story = {
  args: {
    title: 'Total Revenue',
    value: '$45,231.89',
  },
};

export const WithChange: Story = {
  args: {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: 20.1,
    changeLabel: 'from last month',
  },
};

export const NegativeChange: Story = {
  args: {
    title: 'Active Users',
    value: '2,350',
    change: -12.5,
    changeLabel: 'from last week',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: 20.1,
    icon: <DollarSign className="h-4 w-4" />,
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Active Users',
    value: '2,350',
    change: 20.1,
    description: 'Users who logged in this month',
    icon: <Users className="h-4 w-4" />,
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Metric title="Revenue" value="$45,231" change={20.1} icon={<DollarSign className="h-4 w-4" />} />
      <Metric title="Users" value="2,350" change={12.5} icon={<Users className="h-4 w-4" />} />
      <Metric title="Growth" value="+15.2%" change={5.3} icon={<TrendingUp className="h-4 w-4" />} />
    </div>
  ),
};

