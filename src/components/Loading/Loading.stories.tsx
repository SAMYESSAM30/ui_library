import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  render: () => <Loading />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
      <Loading size="xl" />
    </div>
  ),
};

export const WithText: Story = {
  render: () => <Loading text="Loading..." />,
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Loading variant="default" />
      <Loading variant="secondary" />
      <Loading variant="muted" />
    </div>
  ),
};

