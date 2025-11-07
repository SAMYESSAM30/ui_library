import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from './NumberInput';
import { useState } from 'react';

const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter a number',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Quantity',
    placeholder: 'Enter quantity',
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Age',
    min: 0,
    max: 120,
    defaultValue: 25,
  },
};

export const WithError: Story = {
  args: {
    label: 'Quantity',
    error: 'Please enter a valid number',
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <div className="space-y-2">
        <NumberInput
          label="Quantity"
          value={value}
          onValueChange={setValue}
          min={0}
          max={100}
        />
        <p className="text-sm text-muted-foreground">Value: {value}</p>
      </div>
    );
  },
};

