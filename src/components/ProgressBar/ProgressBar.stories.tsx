import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 33,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div>
        <ProgressBar value={50} variant="default" />
      </div>
      <div>
        <ProgressBar value={75} variant="success" />
      </div>
      <div>
        <ProgressBar value={40} variant="warning" />
      </div>
      <div>
        <ProgressBar value={20} variant="destructive" />
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    value: 65,
    showLabel: true,
  },
};

export const Full: Story = {
  args: {
    value: 100,
    showLabel: true,
  },
};

