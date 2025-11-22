import React from "react";
import { motion } from "framer-motion";

const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.25 }}
    className="min-h-screen bg-slate-50 dark:bg-slate-950 px-4 py-6"
  >
    <div className="max-w-6xl mx-auto">{children}</div>
  </motion.div>
);

export default AnimatedPage;
