import React from "react";
import clsx from "clsx";

const Card = ({ className, children }) => (
  <div
    className={clsx(
      "bg-white dark:bg-slate-900 shadow-md rounded-xl border border-slate-200 dark:border-slate-700",
      className
    )}
  >
    {children}
  </div>
);

export default Card;
