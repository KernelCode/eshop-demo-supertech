/**
 * Input Component
 *
 * A reusable input component with an optional search icon.
 *
 * Props:
 * - className: Additional CSS class names to be applied to the input container (default: "").
 * - All other props are forwarded to the underlying HTML input element.
 */

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = "", ...restProps }: InputProps) {
  return (
    <div
      className={`flex gap-1 text-xs  leading-9 items-center justify-center border-[1px] border-gray-700 text-gray-900 rounded-[10px] px-2 w-full ${className}`}
    >
      <input className="bg-transparent !outline-none" {...restProps} />

      <i className="fi fi-rr-search hover  text-[12px] "></i>
    </div>
  );
}
