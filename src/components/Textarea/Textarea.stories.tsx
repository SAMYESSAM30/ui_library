import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message here.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message here.',
    error: 'This field is required',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message here.',
    helperText: 'Please enter a detailed message.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message here.',
    disabled: true,
  },
};

