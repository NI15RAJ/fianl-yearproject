import React from "react";

const PageHeader = ({ title, subtitle, actions }) => (
  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{title}</h1>
      {subtitle && <p className="text-slate-600 dark:text-slate-300">{subtitle}</p>}
    </div>
    {actions && <div className="flex gap-3">{actions}</div>}
  </div>
);

export default PageHeader;
