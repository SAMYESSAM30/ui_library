import type { Meta, StoryObj } from '@storybook/react';
import { SecondNavHeader } from './SecondNavHeader';
import { useState } from 'react';

const meta: Meta<typeof SecondNavHeader> = {
  title: 'Components/SecondNavHeader',
  component: SecondNavHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Overview', href: '#', active: true },
      { label: 'Analytics', href: '#' },
      { label: 'Reports', href: '#' },
      { label: 'Settings', href: '#' },
    ],
  },
};

export const Pills: Story = {
  args: {
    variant: 'pills',
    items: [
      { label: 'All', active: true },
      { label: 'Active' },
      { label: 'Completed' },
      { label: 'Archived' },
    ],
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    items: [
      { label: 'Posts', active: true },
      { label: 'Comments' },
      { label: 'Likes' },
    ],
  },
};

export const Interactive: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    return (
      <SecondNavHeader
        items={[
          { label: 'Tab 1', active: activeTab === 'tab1', onClick: () => setActiveTab('tab1') },
          { label: 'Tab 2', active: activeTab === 'tab2', onClick: () => setActiveTab('tab2') },
          { label: 'Tab 3', active: activeTab === 'tab3', onClick: () => setActiveTab('tab3') },
        ]}
      />
    );
  },
};

