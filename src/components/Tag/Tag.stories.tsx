import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Tag',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag variant="default">Default</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="destructive">Destructive</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="info">Info</Tag>
    </div>
  ),
};

