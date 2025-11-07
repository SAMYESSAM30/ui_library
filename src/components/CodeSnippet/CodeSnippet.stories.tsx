import type { Meta, StoryObj } from '@storybook/react';
import { CodeSnippet } from './CodeSnippet';

const meta: Meta<typeof CodeSnippet> = {
  title: 'Components/CodeSnippet',
  component: CodeSnippet,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CodeSnippet>;

const exampleCode = `function greet(name: string) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`;

export const Default: Story = {
  args: {
    code: exampleCode,
    language: 'typescript',
  },
};

export const WithoutCopyButton: Story = {
  args: {
    code: exampleCode,
    language: 'typescript',
    showCopyButton: false,
  },
};

export const LongCode: Story = {
  args: {
    code: `// This is a very long code snippet
function processData(data: any[]) {
  return data
    .filter(item => item.active)
    .map(item => ({
      id: item.id,
      name: item.name,
      status: item.status,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}`,
    language: 'typescript',
    maxHeight: '200px',
  },
};

