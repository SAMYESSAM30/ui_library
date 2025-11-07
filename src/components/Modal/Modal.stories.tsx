import { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from './Modal';
import { Button } from '../Button/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalExample = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal open={isOpen} onOpenChange={setIsOpen}>
        <ModalContent size={size}>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>
            <ModalDescription>This is the modal description.</ModalDescription>
          </ModalHeader>
          <div className="py-4">Modal content goes here.</div>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalExample />,
};

export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal open={isOpen} onOpenChange={setIsOpen}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Modal with Footer</ModalTitle>
              <ModalDescription>This modal has a footer with actions.</ModalDescription>
            </ModalHeader>
            <div className="py-4">Modal content goes here.</div>
            <ModalFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div className="flex gap-4 mb-4">
          <Button onClick={() => { setSize('sm'); setIsOpen(true); }}>Small</Button>
          <Button onClick={() => { setSize('md'); setIsOpen(true); }}>Medium</Button>
          <Button onClick={() => { setSize('lg'); setIsOpen(true); }}>Large</Button>
          <Button onClick={() => { setSize('xl'); setIsOpen(true); }}>Extra Large</Button>
        </div>
        <Modal open={isOpen} onOpenChange={setIsOpen}>
          <ModalContent size={size}>
            <ModalHeader>
              <ModalTitle>Modal Size: {size}</ModalTitle>
              <ModalDescription>This is a {size} sized modal.</ModalDescription>
            </ModalHeader>
            <div className="py-4">Modal content goes here.</div>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const ArabicRTL: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div dir="rtl" className="p-4 font-arabic">
        <h3 className="mb-4 text-lg font-semibold">أمثلة بالعربية (RTL)</h3>
        <Button onClick={() => setIsOpen(true)}>فتح النافذة</Button>
        <Modal open={isOpen} onOpenChange={setIsOpen}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>نافذة منبثقة</ModalTitle>
              <ModalDescription>هذا وصف النافذة المنبثقة.</ModalDescription>
            </ModalHeader>
            <div className="py-4">محتوى النافذة المنبثقة.</div>
            <ModalFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                إلغاء
              </Button>
              <Button onClick={() => setIsOpen(false)}>حفظ</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  },
};

export const EnglishLTR: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div dir="ltr" className="p-4">
        <h3 className="mb-4 text-lg font-semibold">English Examples (LTR)</h3>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal open={isOpen} onOpenChange={setIsOpen}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Modal Title</ModalTitle>
              <ModalDescription>This is the modal description.</ModalDescription>
            </ModalHeader>
            <div className="py-4">Modal content goes here.</div>
            <ModalFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  },
};
