import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from './RangeSlider';
import { useState } from 'react';

const meta: Meta<typeof RangeSlider> = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    value: [20, 80],
    min: 0,
    max: 100,
  },
};

export const WithLabels: Story = {
  args: {
    value: [25, 75],
    min: 0,
    max: 100,
    showLabels: true,
  },
};

export const PriceRange: Story = {
  args: {
    value: [100, 500],
    min: 0,
    max: 1000,
    step: 10,
    showLabels: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return (
      <div className="w-[300px] space-y-2">
        <RangeSlider value={value} onValueChange={setValue} min={0} max={100} showLabels />
        <p className="text-sm text-muted-foreground">
          Range: {value[0]} - {value[1]}
        </p>
      </div>
    );
  },
};

