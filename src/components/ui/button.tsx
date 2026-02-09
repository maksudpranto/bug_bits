import { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    customStyles?: {
        background?: string;
        hover?: string;
        text?: string;
    };
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, customStyles, style, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        // Create unified styles including our custom variables
        const buttonStyles = {
            ...style,
            '--btn-custom-bg': customStyles?.background,
            '--btn-custom-hover': customStyles?.hover,
            '--btn-custom-text': customStyles?.text,
            ...(customStyles?.background && { backgroundColor: 'var(--btn-custom-bg)' }),
            ...(customStyles?.text && { color: 'var(--btn-custom-text)' }),
        } as React.CSSProperties;

        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, size, className }),
                    customStyles?.hover && "hover:!bg-[var(--btn-custom-hover)]"
                )}
                style={buttonStyles}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
