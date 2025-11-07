import type { Meta, StoryObj } from '@storybook/react';
import { StatusTag } from './StatusTag';

const meta: Meta<typeof StatusTag> = {
  title: 'Components/StatusTag',
  component: StatusTag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatusTag>;

export const Default: Story = {
  args: {
    children: 'Pending',
    status: 'pending',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <StatusTag status="success">Success</StatusTag>
      <StatusTag status="warning">Warning</StatusTag>
      <StatusTag status="error">Error</StatusTag>
      <StatusTag status="info">Info</StatusTag>
      <StatusTag status="pending">Pending</StatusTag>
    </div>
  ),
};

