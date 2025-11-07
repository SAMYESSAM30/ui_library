import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card';
import { Button } from '../Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { Settings, User, Bell } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content. You can add any content here.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card has a footer with actions.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card>
      <CardContent className="pt-6">
        <p>Simple card with just content.</p>
      </CardContent>
    </Card>
  ),
};

export const ArabicRTL: Story = {
  render: () => (
    <div dir="rtl" className="p-4 font-arabic">
      <h3 className="mb-4 text-lg font-semibold">أمثلة بالعربية (RTL)</h3>
      <div className="flex flex-col gap-4 max-w-[400px]">
        <Card>
          <CardHeader>
            <CardTitle>بطاقة عربية</CardTitle>
            <CardDescription>وصف فرعي</CardDescription>
          </CardHeader>
          <CardContent>هذا محتوى البطاقة باللغة العربية مع دعم RTL.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>بطاقة مع تذييل</CardTitle>
          </CardHeader>
          <CardContent>محتوى البطاقة مع أزرار في التذييل.</CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" size="sm">
              إلغاء
            </Button>
            <Button size="sm">حفظ</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

export const EnglishLTR: Story = {
  render: () => (
    <div dir="ltr" className="p-4">
      <h3 className="mb-4 text-lg font-semibold">English Examples (LTR)</h3>
      <div className="flex flex-col gap-4 max-w-[400px]">
        <Card>
          <CardHeader>
            <CardTitle>English Card</CardTitle>
            <CardDescription>Subtitle</CardDescription>
          </CardHeader>
          <CardContent>This is card content in English with LTR support.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card with Footer</CardTitle>
          </CardHeader>
          <CardContent>Card content with buttons in the footer.</CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Card
      title="Settings"
      subtitle="Manage your account settings"
      icon={<Settings className="h-6 w-6 text-primary" />}
    >
      <p>Card content with icon in header.</p>
    </Card>
  ),
};

export const WithIconAndFooter: Story = {
  render: () => (
    <Card
      title="Notifications"
      subtitle="Manage your notifications"
      icon={<Bell className="h-6 w-6 text-primary" />}
      footer={<Button variant="outline">Configure</Button>}
    >
      <p>Card with icon and footer.</p>
    </Card>
  ),
};

export const UserCard: Story = {
  render: () => (
    <Card
      title="John Doe"
      subtitle="Software Engineer"
      icon={<User className="h-8 w-8 text-primary" />}
      footer={<Button>View Profile</Button>}
    >
      <div className="space-y-2">
        <p>Email: john.doe@example.com</p>
        <p>Location: San Francisco, CA</p>
      </div>
    </Card>
  ),
};
