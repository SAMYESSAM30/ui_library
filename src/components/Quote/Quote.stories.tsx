import type { Meta, StoryObj } from '@storybook/react';
import { Quote } from './Quote';

const meta: Meta<typeof Quote> = {
  title: 'Components/Quote',
  component: Quote,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  args: {
    children: 'The only way to do great work is to love what you do.',
  },
};

export const WithAuthor: Story = {
  args: {
    children: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
};

export const WithCite: Story = {
  args: {
    children: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    cite: 'https://example.com',
  },
};

