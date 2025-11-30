import React, { useRef } from "react";
import { Upload } from "lucide-react";

interface FileUploadProps {
  label?: string;
  onChange?: (file: File | null) => void;
  accept?: string;
  maxSize?: string;
}

export default function FileUpload({ 
  label, 
  onChange, 
  accept = ".jpeg,.png",
  maxSize = "25 MB" 
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange?.(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="h-[197px] rounded-lg border border-neutral-300 bg-[#fcfcfd] flex items-center justify-center cursor-pointer hover:border-primary transition-colors"
           onClick={handleClick}>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="flex flex-col items-center gap-2.5">
          <Upload className="w-8 h-8 text-main-text" />
          <div className="flex flex-col items-center gap-1">
            <p className="text-main-text text-[18px]">Drop file or browse</p>
            <p className="text-[#bababa] text-[16px]">
              Format: {accept} & Max file size: {maxSize}
            </p>
            <button 
              type="button"
              className="bg-subtitle-text text-white px-4 py-1 rounded-sm text-[14px] mt-1 hover:bg-[#666666] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
            >
              Browse Files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
