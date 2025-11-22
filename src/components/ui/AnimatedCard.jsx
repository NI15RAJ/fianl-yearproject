import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const AnimatedCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.25 }}
    className={clsx(
      "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-md",
      className
    )}
  >
    {children}
  </motion.div>
);

export default AnimatedCard;
