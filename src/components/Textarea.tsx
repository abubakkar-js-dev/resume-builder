import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
}

export default function Textarea({ label, className = "", ...props }: TextareaProps) {
  return (
    <div className={`flex flex-col gap-[4px] ${className}`}>
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="relative bg-[#fcfcfd] rounded-[8px]">
        <textarea
          className="w-full h-full px-[24px] py-[20px] bg-transparent text-[#333333] text-[16px] rounded-[8px] border border-neutral-300 outline-none focus:border-[#28c76f] transition-colors resize-none"
          {...props}
        />
      </div>
    </div>
  );
}
