import { Badge } from './Badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'success', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const ArabicRTL: Story = {
  render: () => (
    <div dir="rtl" className="p-4 font-arabic">
      <h3 className="mb-4 text-lg font-semibold">أمثلة بالعربية (RTL)</h3>
      <div className="flex gap-4 flex-wrap">
        <Badge variant="default">أساسي</Badge>
        <Badge variant="secondary">ثانوي</Badge>
        <Badge variant="success">نجاح</Badge>
        <Badge variant="warning">تحذير</Badge>
        <Badge variant="destructive">خطر</Badge>
        <Badge variant="info">معلومات</Badge>
      </div>
    </div>
  ),
};

export const EnglishLTR: Story = {
  render: () => (
    <div dir="ltr" className="p-4">
      <h3 className="mb-4 text-lg font-semibold">English Examples (LTR)</h3>
      <div className="flex gap-4 flex-wrap">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="info">Info</Badge>
      </div>
    </div>
  ),
};
