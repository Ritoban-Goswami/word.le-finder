import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-10 h-10 sm:h-14 sm:w-14 rounded-md bg-background px-3 py-2 text-2xl font-semibold text-center file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 uppercase",
        className
      )}
      ref={ref}
      autoComplete="off"
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
