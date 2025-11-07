import { Input } from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'example@email.com',
    helperText: "We'll use this email to contact you",
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: 'Password must be at least 8 characters',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'Cannot edit',
    disabled: true,
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <Input label="Search" placeholder="Search..." leftIcon={<span>🔍</span>} />
      <Input
        label="Email"
        type="email"
        placeholder="email@example.com"
        rightIcon={<span>✉️</span>}
      />
    </div>
  ),
};

export const ArabicRTL: Story = {
  render: () => (
    <div dir="rtl" className="p-4 font-arabic w-[400px]">
      <h3 className="mb-4 text-lg font-semibold">أمثلة بالعربية (RTL)</h3>
      <div className="flex flex-col gap-4">
        <Input label="الاسم" placeholder="أدخل اسمك" />
        <Input
          label="البريد الإلكتروني"
          type="email"
          placeholder="example@email.com"
          helperText="سنستخدم هذا البريد للتواصل معك"
        />
        <Input
          label="كلمة المرور"
          type="password"
          error="كلمة المرور يجب أن تكون 8 أحرف على الأقل"
        />
        <Input label="البحث" placeholder="ابحث..." leftIcon={<span>🔍</span>} />
      </div>
    </div>
  ),
};

export const EnglishLTR: Story = {
  render: () => (
    <div dir="ltr" className="p-4 w-[400px]">
      <h3 className="mb-4 text-lg font-semibold">English Examples (LTR)</h3>
      <div className="flex flex-col gap-4">
        <Input label="Name" placeholder="Enter your name" />
        <Input
          label="Email"
          type="email"
          placeholder="example@email.com"
          helperText="We'll use this email to contact you"
        />
        <Input
          label="Password"
          type="password"
          error="Password must be at least 8 characters"
        />
        <Input label="Search" placeholder="Search..." leftIcon={<span>🔍</span>} />
      </div>
    </div>
  ),
};
