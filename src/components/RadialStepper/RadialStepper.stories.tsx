import type { Meta, StoryObj } from '@storybook/react';
import { RadialStepper } from './RadialStepper';
import { useState } from 'react';
import { Button } from '../Button/Button';

const meta: Meta<typeof RadialStepper> = {
  title: 'Components/RadialStepper',
  component: RadialStepper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
  { label: 'Step 1', description: 'First step' },
  { label: 'Step 2', description: 'Second step' },
  { label: 'Step 3', description: 'Third step' },
  { label: 'Step 4', description: 'Final step' },
];

export const Default: Story = {
  args: {
    steps: steps,
    currentStep: 1,
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

export const Completed: Story = {
  args: {
    steps: [
      { label: 'Step 1', description: 'Completed', completed: true },
      { label: 'Step 2', description: 'Completed', completed: true },
      { label: 'Step 3', description: 'Current', active: true },
      { label: 'Step 4', description: 'Pending' },
    ],
  },
};

export const Interactive: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    return (
      <div className="space-y-4">
        <RadialStepper steps={steps} currentStep={currentStep} />
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

export const AllCompleted: Story = {
  args: {
    steps: [
      { label: 'Step 1', description: 'Done', completed: true },
      { label: 'Step 2', description: 'Done', completed: true },
      { label: 'Step 3', description: 'Done', completed: true },
      { label: 'Step 4', description: 'Done', completed: true },
    ],
  },
};

