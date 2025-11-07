import type { Meta, StoryObj } from '@storybook/react';
import { SlideoutMenu } from './SlideoutMenu';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { NavigationDrawerItem } from '../NavigationDrawerItem/NavigationDrawerItem';
import { Home, Settings, User, Mail } from 'lucide-react';

const meta: Meta<typeof SlideoutMenu> = {
  title: 'Components/SlideoutMenu',
  component: SlideoutMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setIsOpen(true)}>Open Menu</Button>
        <SlideoutMenu isOpen={isOpen} onClose={() => setIsOpen(false)} title="Menu">
          <div className="p-4">
            <p>Menu content goes here</p>
          </div>
        </SlideoutMenu>
      </div>
    );
  },
};

export const LeftPosition: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setIsOpen(true)}>Open Left Menu</Button>
        <SlideoutMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Left Menu"
          position="left"
        >
          <div className="p-4">
            <p>Menu content from left side</p>
          </div>
        </SlideoutMenu>
      </div>
    );
  },
};

export const WithNavigation: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setIsOpen(true)}>Open Navigation Menu</Button>
        <SlideoutMenu isOpen={isOpen} onClose={() => setIsOpen(false)} title="Navigation">
          <ul className="space-y-1 p-4">
            <NavigationDrawerItem label="Home" href="#" icon={<Home className="h-4 w-4" />} active />
            <NavigationDrawerItem label="Profile" href="#" icon={<User className="h-4 w-4" />} />
            <NavigationDrawerItem label="Messages" href="#" icon={<Mail className="h-4 w-4" />} />
            <NavigationDrawerItem label="Settings" href="#" icon={<Settings className="h-4 w-4" />} />
          </ul>
        </SlideoutMenu>
      </div>
    );
  },
};

export const CustomWidth: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setIsOpen(true)}>Open Wide Menu</Button>
        <SlideoutMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Wide Menu"
          width="500px"
        >
          <div className="p-4">
            <p>This menu has a custom width of 500px</p>
          </div>
        </SlideoutMenu>
      </div>
    );
  },
};

export const WithoutTitle: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-8">
        <Button onClick={() => setIsOpen(true)}>Open Menu Without Title</Button>
        <SlideoutMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="p-4">
            <p>Menu without title</p>
          </div>
        </SlideoutMenu>
      </div>
    );
  },
};

