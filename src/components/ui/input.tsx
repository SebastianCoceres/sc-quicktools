import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  containerClassName?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, containerClassName, type, prefix, suffix, ...props }, ref) => {
    return (
      <div className={cn("relative w-full", containerClassName)}>
        {prefix && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            {prefix}
          </div>
        )}

        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            prefix && "pl-10",
            suffix && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />
        {suffix && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {suffix}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
