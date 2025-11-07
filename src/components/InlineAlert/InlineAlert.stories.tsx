import type { Meta, StoryObj } from '@storybook/react';
import { InlineAlert } from './InlineAlert';

const meta: Meta<typeof InlineAlert> = {
  title: 'Components/InlineAlert',
  component: InlineAlert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InlineAlert>;

export const Default: Story = {
  args: {
    children: 'This is a default alert message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Please review your changes before submitting.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational message.',
  },
};

export const Closable: Story = {
  args: {
    variant: 'info',
    title: 'Closable Alert',
    children: 'You can close this alert.',
    onClose: () => alert('Alert closed!'),
  },
};

