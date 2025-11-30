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
    <div className="flex flex-col gap-[4px] w-full">
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="h-[197px] rounded-[8px] border border-neutral-300 bg-[#fcfcfd] flex items-center justify-center cursor-pointer hover:border-[#28c76f] transition-colors"
           onClick={handleClick}>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="flex flex-col items-center gap-[10px]">
          <Upload className="w-[32px] h-[32px] text-[#333333]" />
          <div className="flex flex-col items-center gap-[4px]">
            <p className="text-[#333333] text-[18px]">Drop file or browse</p>
            <p className="text-[#bababa] text-[16px]">
              Format: {accept} & Max file size: {maxSize}
            </p>
            <button 
              type="button"
              className="bg-[#777777] text-white px-[16px] py-[4px] rounded-[4px] text-[14px] mt-[4px] hover:bg-[#666666] transition-colors"
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
