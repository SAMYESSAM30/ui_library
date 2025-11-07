import type { Meta, StoryObj } from '@storybook/react';
import { SearchBox } from './SearchBox';
import { useState } from 'react';

const meta: Meta<typeof SearchBox> = {
  title: 'Components/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Search...',
    defaultValue: 'Search term',
  },
};

export const WithoutClearButton: Story = {
  args: {
    placeholder: 'Search...',
    showClearButton: false,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="space-y-2">
        <SearchBox
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
        />
        <p className="text-sm text-muted-foreground">Search term: {value || '(empty)'}</p>
      </div>
    );
  },
};

