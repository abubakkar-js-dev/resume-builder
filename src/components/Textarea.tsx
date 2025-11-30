import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
}

export default function Textarea({ label, className = "", ...props }: TextareaProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="relative bg-[#fcfcfd] rounded-lg">
        <textarea
          className="w-full h-full px-6 py-5 bg-transparent text-main-text text-[16px] rounded-lg border border-neutral-300 outline-none focus:border-primary transition-colors resize-none"
          {...props}
        />
      </div>
    </div>
  );
}
