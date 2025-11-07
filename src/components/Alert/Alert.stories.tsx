import React from 'react';
import { Alert, AlertDescription, AlertTitle } from './Alert';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'This is an informational message.',
    variant: 'default',
  },
};

export const Success: Story = {
  args: {
    children: 'Operation completed successfully!',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning: Please review the information.',
    variant: 'warning',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Error: Something went wrong.',
    variant: 'destructive',
  },
};

export const Info: Story = {
  args: {
    children: 'This is an informational message.',
    variant: 'info',
  },
};

export const WithTitle: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTitle>Important Alert</AlertTitle>
      <AlertDescription>This is an alert message with a title.</AlertDescription>
    </Alert>
  ),
};

export const Closable: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true);
    if (!isOpen) return <div />;
    return (
      <Alert variant="info" onClose={() => setIsOpen(false)}>
        <AlertTitle>Closable Alert</AlertTitle>
        <AlertDescription>You can close this alert by clicking the X button.</AlertDescription>
      </Alert>
    );
  },
};

export const ArabicRTL: Story = {
  render: () => (
    <div dir="rtl" className="p-4 font-arabic max-w-[500px]">
      <h3 className="mb-4 text-lg font-semibold">أمثلة بالعربية (RTL)</h3>
      <div className="flex flex-col gap-4">
        <Alert variant="success" title="نجاح">
          تمت العملية بنجاح!
        </Alert>
        <Alert variant="warning" title="تحذير">
          يرجى مراجعة المعلومات قبل المتابعة.
        </Alert>
        <Alert variant="destructive" title="خطأ">
          حدثت مشكلة ما. يرجى المحاولة مرة أخرى.
        </Alert>
        <Alert variant="info" title="معلومات">
          هذه رسالة معلوماتية باللغة العربية.
        </Alert>
      </div>
    </div>
  ),
};

export const EnglishLTR: Story = {
  render: () => (
    <div dir="ltr" className="p-4 max-w-[500px]">
      <h3 className="mb-4 text-lg font-semibold">English Examples (LTR)</h3>
      <div className="flex flex-col gap-4">
        <Alert variant="success" title="Success">
          Operation completed successfully!
        </Alert>
        <Alert variant="warning" title="Warning">
          Please review the information before proceeding.
        </Alert>
        <Alert variant="destructive" title="Error">
          Something went wrong. Please try again.
        </Alert>
        <Alert variant="info" title="Info">
          This is an informational message in English.
        </Alert>
      </div>
    </div>
  ),
};
