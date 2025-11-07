import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { useState } from 'react';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    placeholder: 'Pick a date',
  },
};

export const WithDate: Story = {
  args: {
    date: new Date(),
    placeholder: 'Pick a date',
  },
};

export const Interactive: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <div className="space-y-2">
        <DatePicker date={date} onDateChange={setDate} />
        <p className="text-sm text-muted-foreground">
          Selected: {date ? date.toLocaleDateString() : 'No date selected'}
        </p>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Pick a date',
  },
};

