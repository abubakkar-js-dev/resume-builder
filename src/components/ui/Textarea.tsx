"use client";

import React from "react";
import { Label } from "./Label";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({
  label,
  className = "",
  rows = 4,
  ...props
}: TextareaProps) {
  return (
    <div className={className}>
      {label && (
        <Label className="mb-2 text-sm font-medium text-gray-700">
          {label}
        </Label>
      )}
      <textarea
        rows={rows}
        className="w-full resize-y rounded-md border border-gray-200 bg-white px-3 py-2 text-base outline-none focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 disabled:opacity-50"
        {...props}
      />
    </div>
  );
}
