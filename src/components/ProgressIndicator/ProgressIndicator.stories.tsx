import type { Meta, StoryObj } from '@storybook/react';
import { ProgressIndicator } from './ProgressIndicator';
import { useState } from 'react';
import { Button } from '../Button/Button';

const meta: Meta<typeof ProgressIndicator> = {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

export const Default: Story = {
  args: {
    steps: steps,
    currentStep: 2,
  },
};

export const Dots: Story = {
  args: {
    steps: steps,
    currentStep: 1,
    variant: 'dots',
  },
};

export const Numbers: Story = {
  args: {
    steps: steps,
    currentStep: 3,
    variant: 'numbers',
  },
};

export const Horizontal: Story = {
  args: {
    steps: steps,
    currentStep: 2,
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    steps: steps,
    currentStep: 1,
    orientation: 'vertical',
  },
};

export const Interactive: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    return (
      <div className="space-y-4">
        <ProgressIndicator steps={steps} currentStep={currentStep} variant="numbers" />
        <div className="flex gap-2 justify-center">
          <Button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    );
  },
};

export const FirstStep: Story = {
  args: {
    steps: steps,
    currentStep: 0,
    variant: 'numbers',
  },
};

export const LastStep: Story = {
  args: {
    steps: steps,
    currentStep: 4,
    variant: 'numbers',
  },
};

