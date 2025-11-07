import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgressBar } from './CircularProgressBar';

const meta: Meta<typeof CircularProgressBar> = {
  title: 'Components/CircularProgressBar',
  component: CircularProgressBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CircularProgressBar>;

export const Default: Story = {
  args: {
    value: 65,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <CircularProgressBar value={75} variant="default" />
      <CircularProgressBar value={60} variant="success" />
      <CircularProgressBar value={40} variant="warning" />
      <CircularProgressBar value={25} variant="destructive" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <CircularProgressBar value={65} size="sm" />
      <CircularProgressBar value={65} size="md" />
      <CircularProgressBar value={65} size="lg" />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
};

export const Full: Story = {
  args: {
    value: 100,
    showLabel: true,
  },
};

