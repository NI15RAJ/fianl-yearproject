import React from "react";
import clsx from "clsx";

export const Label = ({ className, children, ...props }) => (
  <label
    className={clsx("block text-sm font-medium text-slate-700 dark:text-slate-200", className)}
    {...props}
  >
    {children}
  </label>
);

export const Input = ({ className, ...props }) => (
  <input
    className={clsx(
      "w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-green-500",
      className
    )}
    {...props}
  />
);
