import React from "react";
import clsx from "clsx";

const base =
  "inline-flex items-center justify-center font-semibold rounded-lg px-4 py-2 transition focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400",
  secondary:
    "bg-slate-600 text-white hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-400",
  outline:
    "border border-green-600 text-green-700 hover:bg-green-50 dark:border-green-400 dark:text-green-300 dark:hover:bg-slate-800",
  ghost: "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
};

const sizes = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
};

const Button = ({ variant = "primary", size = "md", className, ...props }) => (
  <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />
);

export default Button;
