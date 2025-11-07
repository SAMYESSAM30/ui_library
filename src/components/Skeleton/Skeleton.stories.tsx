import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonCircle, SkeletonLine, SkeletonRectangle, SkeletonSquare } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-[250px]" />,
};

export const Circle: Story = {
  render: () => <SkeletonCircle className="h-12 w-12" />,
};

export const Line: Story = {
  render: () => <SkeletonLine className="w-[250px]" />,
};

export const Rectangle: Story = {
  render: () => <SkeletonRectangle className="w-[250px]" />,
};

export const Square: Story = {
  render: () => <SkeletonSquare />,
};

export const Card: Story = {
  render: () => (
    <div className="flex items-center space-x-4 w-[300px]">
      <SkeletonCircle className="h-12 w-12" />
      <div className="space-y-2 flex-1">
        <SkeletonLine className="w-full" />
        <SkeletonLine className="w-3/4" />
      </div>
    </div>
  ),
};

