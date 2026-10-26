import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border-2 px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em]",
  {
    variants: {
      variant: {
        leaf: "border-leaf text-leaf",
        ochre: "border-ochre text-ink bg-ochre/20",
        forest: "border-forest text-forest",
        cream: "border-cream/50 text-cream",
        lime: "border-lime text-lime",
      },
    },
    defaultVariants: {
      variant: "leaf",
    },
  },
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { badgeVariants };
