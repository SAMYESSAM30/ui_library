import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';
import { useState } from 'react';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    label: 'Upload files',
  },
};

export const Multiple: Story = {
  args: {
    label: 'Upload multiple files',
    multiple: true,
  },
};

export const WithAccept: Story = {
  args: {
    label: 'Upload images',
    accept: 'image/*',
    helperText: 'Only image files are allowed',
  },
};

export const WithMaxSize: Story = {
  args: {
    label: 'Upload file',
    maxSize: 5 * 1024 * 1024, // 5MB
    helperText: 'Maximum file size: 5MB',
  },
};

export const Interactive: Story = {
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return (
      <div className="space-y-2">
        <FileUpload
          label="Upload files"
          multiple
          onFilesChange={setFiles}
        />
        {files.length > 0 && (
          <div className="text-sm text-muted-foreground">
            {files.length} file(s) selected
          </div>
        )}
      </div>
    );
  },
};

