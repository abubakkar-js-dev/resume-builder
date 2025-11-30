import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export default function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="relative bg-[#fcfcfd] h-16 rounded-lg">
        <input
          className="w-full h-full px-6 bg-transparent text-main-text text-[16px] rounded-lg border border-neutral-300 outline-none focus:border-primary transition-colors"
          {...props}
        />
      </div>
    </div>
  );
}
