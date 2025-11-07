import type { Meta, StoryObj } from '@storybook/react';
import { useToast } from './use-toast';
import { Toaster } from './Toaster';
import { Button } from '../Button/Button';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toast',
  component: Toaster,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <div className="space-y-2">
      <Button
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
        }}
      >
        Show Toast
      </Button>
      <Button
        variant="destructive"
        onClick={() => {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Something went wrong.',
          });
        }}
      >
        Show Error Toast
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <ToastDemo />
    </>
  ),
};

