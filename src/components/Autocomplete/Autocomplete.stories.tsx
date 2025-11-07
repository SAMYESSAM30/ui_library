import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './Autocomplete';
import { useState } from 'react';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'orange', label: 'Orange' },
  { value: 'pineapple', label: 'Pineapple' },
  { value: 'strawberry', label: 'Strawberry' },
];

export const Default: Story = {
  args: {
    options,
    placeholder: 'Select a fruit...',
  },
};

export const WithValue: Story = {
  args: {
    options,
    value: 'banana',
    placeholder: 'Select a fruit...',
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    return (
      <div className="space-y-2">
        <Autocomplete
          options={options}
          value={value}
          onValueChange={setValue}
          placeholder="Select a fruit..."
        />
        <p className="text-sm text-muted-foreground">Selected: {value || '(none)'}</p>
      </div>
    );
  },
};

