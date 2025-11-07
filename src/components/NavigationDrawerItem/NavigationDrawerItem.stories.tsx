import type { Meta, StoryObj } from '@storybook/react';
import { NavigationDrawerItem } from './NavigationDrawerItem';
import { Home, Settings, User, Mail, Bell, FileText } from 'lucide-react';
import { Badge } from '../Badge/Badge';

const meta: Meta<typeof NavigationDrawerItem> = {
  title: 'Components/NavigationDrawerItem',
  component: NavigationDrawerItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Home',
    href: '#',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Dashboard',
    href: '#',
    icon: <Home className="h-4 w-4" />,
  },
};

export const Active: Story = {
  args: {
    label: 'Settings',
    href: '#',
    icon: <Settings className="h-4 w-4" />,
    active: true,
  },
};

export const WithBadge: Story = {
  args: {
    label: 'Notifications',
    href: '#',
    icon: <Bell className="h-4 w-4" />,
    badge: <Badge variant="destructive">3</Badge>,
  },
};

export const Nested: Story = {
  render: () => (
    <ul className="w-64 space-y-1">
      <NavigationDrawerItem label="Home" href="#" icon={<Home className="h-4 w-4" />} active />
      <NavigationDrawerItem label="Profile" href="#" icon={<User className="h-4 w-4" />} />
      <NavigationDrawerItem label="Messages" href="#" icon={<Mail className="h-4 w-4" />} badge={<Badge>5</Badge>} />
      <NavigationDrawerItem label="Documents" href="#" icon={<FileText className="h-4 w-4" />} level={1} />
      <NavigationDrawerItem label="Settings" href="#" icon={<Settings className="h-4 w-4" />} level={1} />
    </ul>
  ),
};

