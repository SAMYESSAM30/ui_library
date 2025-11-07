import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './Radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <label htmlFor="r1" className="text-sm font-medium">
          Default
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <label htmlFor="r2" className="text-sm font-medium">
          Comfortable
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <label htmlFor="r3" className="text-sm font-medium">
          Compact
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" className="flex gap-6">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="h1" />
        <label htmlFor="h1" className="text-sm font-medium">
          Option One
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="h2" />
        <label htmlFor="h2" className="text-sm font-medium">
          Option Two
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="h3" />
        <label htmlFor="h3" className="text-sm font-medium">
          Option Three
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="d1" />
        <label htmlFor="d1" className="text-sm font-medium">
          Option One
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="d2" />
        <label htmlFor="d2" className="text-sm font-medium">
          Option Two
        </label>
      </div>
    </RadioGroup>
  ),
};

