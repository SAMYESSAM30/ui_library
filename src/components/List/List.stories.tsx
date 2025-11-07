import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from './List';
import { User, Mail, Phone, ChevronRight } from 'lucide-react';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ),
};

export const Bordered: Story = {
  render: () => (
    <List variant="bordered" className="w-64">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ),
};

export const Spaced: Story = {
  render: () => (
    <List variant="spaced" className="w-64">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <List className="w-64">
      <ListItem startIcon={<User className="h-4 w-4" />} endIcon={<ChevronRight className="h-4 w-4" />}>
        Profile
      </ListItem>
      <ListItem startIcon={<Mail className="h-4 w-4" />} endIcon={<ChevronRight className="h-4 w-4" />}>
        Messages
      </ListItem>
      <ListItem startIcon={<Phone className="h-4 w-4" />} endIcon={<ChevronRight className="h-4 w-4" />}>
        Contacts
      </ListItem>
    </List>
  ),
};

export const Clickable: Story = {
  render: () => (
    <List className="w-64">
      <ListItem onClick={() => alert('Clicked Item 1')}>Clickable Item 1</ListItem>
      <ListItem onClick={() => alert('Clicked Item 2')}>Clickable Item 2</ListItem>
      <ListItem onClick={() => alert('Clicked Item 3')}>Clickable Item 3</ListItem>
    </List>
  ),
};

