"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-display font-bold uppercase tracking-[0.16em] transition-[color,background-color,transform] duration-200 ease-out will-change-transform disabled:pointer-events-none disabled:opacity-40 motion-safe:hover:-translate-y-px motion-safe:active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-leaf text-cream hover:bg-ink",
        accent: "bg-ochre text-ink hover:bg-cream",
        lime: "bg-lime text-ink hover:bg-ochre",
        forest: "bg-forest text-cream hover:bg-ink",
        outline:
          "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-cream",
        ghost: "bg-transparent text-ink hover:text-leaf",
      },
      size: {
        default: "px-7 py-3 text-[12px]",
        sm: "px-4 py-2 text-[11px]",
        lg: "px-8 py-4 text-[12px] tracking-[0.2em]",
        wide: "w-full px-5 py-3 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
