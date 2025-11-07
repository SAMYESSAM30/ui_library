import * as React from 'react';
import { Upload, X, File } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../Button/Button';

export interface FileUploadProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  onFilesChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  label?: string;
  helperText?: string;
  error?: string;
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      className,
      onFilesChange,
      accept,
      multiple = false,
      maxSize,
      label = 'Upload files',
      helperText,
      error,
      ...props
    },
    ref
  ) => {
    const [files, setFiles] = React.useState<File[]>([]);
    const [dragActive, setDragActive] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleFiles = (fileList: FileList | null) => {
      if (!fileList) return;

      const newFiles = Array.from(fileList);
      const validFiles: File[] = [];

      newFiles.forEach((file) => {
        if (maxSize && file.size > maxSize) {
          return;
        }
        validFiles.push(file);
      });

      const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
      setFiles(updatedFiles);
      if (onFilesChange) {
        onFilesChange(updatedFiles);
      }
    };

    const handleDrag = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === 'dragenter' || e.type === 'dragover') {
        setDragActive(true);
      } else if (e.type === 'dragleave') {
        setDragActive(false);
      }
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      handleFiles(e.dataTransfer.files);
    };

    const removeFile = (index: number) => {
      const newFiles = files.filter((_, i) => i !== index);
      setFiles(newFiles);
      if (onFilesChange) {
        onFilesChange(newFiles);
      }
    };

    const formatFileSize = (bytes: number) => {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };

    return (
      <div className="w-full">
        {label && (
          <label className="text-sm font-medium leading-none mb-1.5 block">{label}</label>
        )}
        <div
          className={cn(
            'relative flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg p-6 transition-colors',
            dragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25',
            error && 'border-destructive',
            className
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            accept={accept}
            multiple={multiple}
            onChange={(e) => handleFiles(e.target.files)}
            {...props}
          />
          <Upload className="h-10 w-10 text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground text-center">
            Drag and drop files here, or{' '}
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="text-primary hover:underline"
            >
              browse
            </button>
          </p>
          {maxSize && (
            <p className="text-xs text-muted-foreground mt-1">
              Max file size: {formatFileSize(maxSize)}
            </p>
          )}
        </div>
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border rounded-md bg-muted/50"
              >
                <div className="flex items-center gap-2">
                  <File className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFile(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
        {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    );
  }
);
FileUpload.displayName = 'FileUpload';

export { FileUpload };

