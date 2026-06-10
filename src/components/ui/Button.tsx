// src/components/ui/Button.tsx
import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to?: string; // If provided, renders as a Link
  onClick?: () => void; // If provided, renders as a button
  className?: string;
  variant?: "primary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  className = "",
  variant = "primary",
}) => {
  // Base classes from style-guide.md
  const baseStyles = "inline-block px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-md shadow-lg transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 focus:ring-1 focus:ring-citrine";

  // Specific variants[cite: 1]
  const variants = {
    primary: "bg-citrine text-slate-950",
    outline: "border-2 border-citrine text-citrine hover:bg-citrine hover:text-slate-950",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};