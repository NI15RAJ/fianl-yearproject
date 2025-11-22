import React from "react";
import clsx from "clsx";

const Section = ({ className, children }) => (
  <section className={clsx("mt-5 space-y-4", className)}>{children}</section>
);

export default Section;
