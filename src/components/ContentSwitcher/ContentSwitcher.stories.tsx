import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ContentSwitcher } from './ContentSwitcher';

const meta: Meta<typeof ContentSwitcher> = {
  title: 'Components/ContentSwitcher',
  component: ContentSwitcher,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContentSwitcher>;

export const Default: Story = {
  args: {
    options: [
      { value: 'tab1', label: 'Tab 1', content: <div>Content for Tab 1</div> },
      { value: 'tab2', label: 'Tab 2', content: <div>Content for Tab 2</div> },
      { value: 'tab3', label: 'Tab 3', content: <div>Content for Tab 3</div> },
    ],
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'tab2',
    options: [
      { value: 'tab1', label: 'Overview', content: <div>Overview content</div> },
      { value: 'tab2', label: 'Analytics', content: <div>Analytics content</div> },
      { value: 'tab3', label: 'Reports', content: <div>Reports content</div> },
    ],
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('tab1');
    return (
      <ContentSwitcher
        value={value}
        onValueChange={setValue}
        options={[
          { value: 'tab1', label: 'Tab 1', content: <div>Content 1 - Current: {value}</div> },
          { value: 'tab2', label: 'Tab 2', content: <div>Content 2 - Current: {value}</div> },
          { value: 'tab3', label: 'Tab 3', content: <div>Content 3 - Current: {value}</div> },
        ]}
      />
    );
  },
};

