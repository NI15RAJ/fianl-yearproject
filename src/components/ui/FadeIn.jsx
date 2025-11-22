import React from "react";
import { motion } from "framer-motion";

const FadeIn = ({ delay = 0, children }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}>
    {children}
  </motion.div>
);

export default FadeIn;
