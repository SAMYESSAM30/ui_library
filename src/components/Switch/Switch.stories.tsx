import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label
        htmlFor="airplane-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode2" defaultChecked />
      <label
        htmlFor="airplane-mode2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode3" disabled />
      <label
        htmlFor="airplane-mode3"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Switch id="notifications" defaultChecked />
        <label htmlFor="notifications" className="text-sm font-medium">
          Notifications
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="email" />
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="sms" defaultChecked />
        <label htmlFor="sms" className="text-sm font-medium">
          SMS
        </label>
      </div>
    </div>
  ),
};

