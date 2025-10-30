// AvatarUpload.tsx
"use client";

import { useState, forwardRef, useImperativeHandle } from "react";
import { FileWithPreview, useFileUpload } from "@/components/file-upload";
import { Button } from "@/components/button-1";
import { TriangleAlert, User, X } from "lucide-react";
import { Alert, AlertContent, AlertDescription, AlertIcon, AlertTitle } from "@/components/alert-1";
import { cn } from "@/lib/utils";

function formatBytes(bytes: number): string {
  const sizes = ["Bytes", "KB", "MB", "GB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
}

export interface AvatarUploadRef {
  removePhoto: () => void;
  triggerUpload: () => void;
}

interface AvatarUploadProps {
  maxSize?: number;
  className?: string;
  onFileChange?: (file: FileWithPreview | null) => void;
  defaultAvatar?: string;
}

const AvatarUpload = forwardRef<AvatarUploadRef, AvatarUploadProps>(
  ({ maxSize = 2 * 1024 * 1024, className, onFileChange, defaultAvatar }, ref) => {
    const [
      { files, isDragging, errors },
      { removeFile, handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, getInputProps },
    ] = useFileUpload({
      maxFiles: 1,
      maxSize,
      accept: "image/*",
      multiple: false,
      onFilesChange: (files) => {
        onFileChange?.(files[0] || null);
      },
    });

    const currentFile = files[0];
    const previewUrl = currentFile?.preview || defaultAvatar;

    // expose functions to parent
    useImperativeHandle(ref, () => ({
      removePhoto: () => {
        if (currentFile) removeFile(currentFile.id);
        onFileChange?.(null);
      },
      triggerUpload: openFileDialog,
    }));

    return (
      <div className={cn("flex flex-col items-center gap-4", className)}>
        {/* Avatar Preview */}
        <div className="relative">
          <div
            className={cn(
              "group/avatar relative h-24 w-24 cursor-pointer overflow-hidden rounded-full border border-dashed transition-colors",
              isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/20",
              previewUrl && "border-solid"
            )}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={openFileDialog}
          >
            <input {...getInputProps()} className="sr-only" />
            {previewUrl ? (
              <img src={previewUrl} alt="Avatar" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <User className="size-6 text-muted-foreground" />
              </div>
            )}
          </div>
          {currentFile && (
            <Button
              size="icon"
              variant="outline"
              onClick={() => removeFile(currentFile.id)}
              className="size-6 absolute end-0 top-0 rounded-full"
              aria-label="Remove avatar"
            >
              <X className="size-3.5" />
            </Button>
          )}
        </div>

        <div className="text-center space-y-0.5">
          <p className="text-sm font-medium">{currentFile ? "Avatar uploaded" : "Upload avatar"}</p>
          <p className="text-xs text-muted-foreground">PNG, JPG up to {formatBytes(maxSize)}</p>
        </div>

        {errors.length > 0 && (
          <Alert variant="destructive" appearance="light" className="mt-5">
            <AlertIcon>
              <TriangleAlert />
            </AlertIcon>
            <AlertContent>
              <AlertTitle>File upload error(s)</AlertTitle>
              <AlertDescription>
                {errors.map((error: any, index: any) => (
                  <p key={index} className="last:mb-0">
                    {error}
                  </p>
                ))}
              </AlertDescription>
            </AlertContent>
          </Alert>
        )}
      </div>
    );
  }
);

AvatarUpload.displayName = "AvatarUpload";
export default AvatarUpload;
