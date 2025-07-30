import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg transition-all duration-300",
        hero: "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 colored-glow hover:shadow-lg transition-all duration-300",
        glass:
          "glass text-foreground hover:bg-background/20 border-border/50 hover:border-primary/50 backdrop-blur-xl",
        minimal:
          "bg-transparent border border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        subtle:
          "bg-accent text-accent-foreground hover:bg-accent/80 soft-shadow transition-all duration-300",
        blue: "bg-blue text-blue-foreground hover:bg-blue/90 shadow-lg hover:shadow-xl transition-all duration-300",
        purple:
          "bg-purple text-purple-foreground hover:bg-purple/90 shadow-lg hover:shadow-xl transition-all duration-300",
        teal: "bg-teal text-teal-foreground hover:bg-teal/90 shadow-lg hover:shadow-xl transition-all duration-300",
        orange:
          "bg-orange text-orange-foreground hover:bg-orange/90 shadow-lg hover:shadow-xl transition-all duration-300",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-10 text-base",
        xl: "h-16 rounded-lg px-12 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
