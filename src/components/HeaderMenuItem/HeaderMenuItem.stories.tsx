import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMenuItem } from './HeaderMenuItem';
import { Home, Settings, User, ChevronDown } from 'lucide-react';

const meta: Meta<typeof HeaderMenuItem> = {
  title: 'Components/HeaderMenuItem',
  component: HeaderMenuItem,
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
    label: 'Home',
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

export const WithDropdown: Story = {
  render: () => (
    <ul className="flex gap-2">
      <HeaderMenuItem label="Home" href="#" icon={<Home className="h-4 w-4" />} />
      <HeaderMenuItem label="Profile" href="#" icon={<User className="h-4 w-4" />} active />
      <HeaderMenuItem
        label="Settings"
        icon={<Settings className="h-4 w-4" />}
      >
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-accent">
            Account
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-accent">
            Preferences
          </a>
        </li>
      </HeaderMenuItem>
    </ul>
  ),
};

