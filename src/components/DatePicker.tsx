import React from "react";
import { Calendar } from "lucide-react";

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export default function DatePicker({ label, className = "", ...props }: DatePickerProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <p className="text-[#101010] text-[20px] font-medium leading-[1.6]">
          {label}
        </p>
      )}
      <div className="relative bg-[#fcfcfd] h-16 rounded-lg">
        <input
          type="date"
          className="w-full h-full px-6 bg-transparent text-main-text text-[16px] rounded-lg border border-neutral-300 outline-none focus:border-primary transition-colors"
          {...props}
        />
        <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-subtitle-text pointer-events-none" />
      </div>
    </div>
  );
}
