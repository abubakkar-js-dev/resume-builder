"use client";
import { Label } from "@/components/ui/Label";
import React from "react";

type Option = { value: string; label: string };

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
}

export default function Select({
  label,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className={className}>
      {label && (
        <Label className="mb-2 text-sm font-medium text-gray-700">
          {label}
        </Label>
      )}
      <select
        className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-base outline-none focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 disabled:opacity-50"
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
