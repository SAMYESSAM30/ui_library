import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Slider defaultValue={[20, 80]} max={100} step={1} />
    </div>
  ),
};

export const WithSteps: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Slider defaultValue={[50]} max={100} step={10} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState([50]);
    return (
      <div className="w-[300px] space-y-4">
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
        <p className="text-sm text-muted-foreground">Value: {value[0]}</p>
      </div>
    );
  },
};

