import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: 'Chip',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Chip variant="default">Default</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="destructive">Destructive</Chip>
      <Chip variant="outline">Outline</Chip>
    </div>
  ),
};

export const WithRemove: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Chip onRemove={() => alert('Removed!')}>Removable</Chip>
      <Chip variant="secondary" onRemove={() => alert('Removed!')}>
        Secondary Removable
      </Chip>
    </div>
  ),
};

