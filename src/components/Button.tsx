import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, disabled, children, ...props }, ref) => {
    const baseStyles = [
      "inline-flex items-center justify-center font-medium transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
      "disabled:opacity-50 disabled:cursor-not-allowed",
    ];

    const variants = {
      primary: [
        "bg-gray-800 text-white",
        "hover:bg-gray-700",
        "active:bg-gray-900",
        "shadow-md hover:shadow-lg active:shadow-sm",
      ],
      secondary: [
        "bg-gray-600 text-white",
        "hover:bg-gray-500",
        "active:bg-gray-700",
        "shadow-md hover:shadow-lg active:shadow-sm",
      ],
      outline: [
        "border-2 border-gray-600 text-gray-600 bg-transparent",
        "hover:bg-gray-600 hover:text-white",
        "active:bg-gray-700 active:border-gray-700",
      ],
      ghost: [
        "text-gray-600 bg-transparent",
        "hover:bg-gray-100 hover:text-gray-900",
        "active:bg-gray-200",
      ],
    };

    const sizes = {
      sm: "text-sm px-3 py-1.5 rounded-lg",
      md: "text-base px-4 py-2 rounded-xl",
      lg: "text-lg px-6 py-3 rounded-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isLoading && "cursor-wait",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button; 