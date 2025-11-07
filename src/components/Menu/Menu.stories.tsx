import type { Meta, StoryObj } from '@storybook/react';
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuTrigger,
} from './Menu';
import { Button } from '../Button/Button';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuSeparator />
        <MenuItem>Logout</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>My Account</MenuLabel>
        <MenuSeparator />
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuSeparator />
        <MenuItem>Logout</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

