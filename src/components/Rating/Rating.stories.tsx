import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import { useState } from 'react';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
    max: 5,
  },
};

export const Readonly: Story = {
  args: {
    value: 4,
    max: 5,
    readonly: true,
  },
};

export const WithLabel: Story = {
  args: {
    value: 3,
    max: 5,
    showLabel: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Rating value={3} size="sm" />
      <Rating value={3} size="md" />
      <Rating value={3} size="lg" />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <div className="space-y-2">
        <Rating value={value} onValueChange={setValue} />
        <p className="text-sm text-muted-foreground">Rating: {value}</p>
      </div>
    );
  },
};

