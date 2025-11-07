import type { Meta, StoryObj } from '@storybook/react';
import { FloatingButton } from './FloatingButton';
import { Plus, MessageCircle } from 'lucide-react';

const meta: Meta<typeof FloatingButton> = {
  title: 'Components/FloatingButton',
  component: FloatingButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
  render: () => (
    <div className="h-screen p-8">
      <p>Scroll to see the floating button</p>
      <FloatingButton />
    </div>
  ),
};

export const BottomRight: Story = {
  render: () => (
    <div className="h-screen p-8">
      <FloatingButton position="bottom-right" />
    </div>
  ),
};

export const BottomLeft: Story = {
  render: () => (
    <div className="h-screen p-8">
      <FloatingButton position="bottom-left" />
    </div>
  ),
};

export const TopRight: Story = {
  render: () => (
    <div className="h-screen p-8">
      <FloatingButton position="top-right" />
    </div>
  ),
};

export const TopLeft: Story = {
  render: () => (
    <div className="h-screen p-8">
      <FloatingButton position="top-left" />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <div className="h-screen p-8">
      <FloatingButton icon={<MessageCircle className="h-6 w-6" />} />
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className="h-screen p-8">
      <FloatingButton onClick={() => alert('Floating button clicked!')} />
    </div>
  ),
};

