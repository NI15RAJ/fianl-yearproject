import React from "react";
import { motion } from "framer-motion";

const SlideUp = ({ delay = 0, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.25 }}
  >
    {children}
  </motion.div>
);

export default SlideUp;
