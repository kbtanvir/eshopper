import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "ring-none flex h-[60px] w-full rounded-md border border-input border-slate-700   bg-slate-900 focus:bg-slate-800 px-5 py-2 text-base text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  placeholder:text-white/80 focus-visible:outline-none   focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
