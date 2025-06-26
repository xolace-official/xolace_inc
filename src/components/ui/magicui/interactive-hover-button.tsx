/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ElementType, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export const InteractiveHoverButton = React.forwardRef(
  <T extends ElementType = "button">(
    { as, children, className, ...props }: Props<T>,
    ref: React.Ref<any>
  ) => {
    const Component = as || "button";
    return (
      <Component
        ref={ref}
        className={cn(
          "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
          <span>{children}</span>
          <ArrowRight />
        </div>
      </Component>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
