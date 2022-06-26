import React from "react";
import "./style.scss";
import { motion } from "framer-motion";

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,
    transition: {
      duration: 2,
      // delay: 5,
      ease: "easeInOut",
    },
  },
};

// const pathVariants = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0,
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     transition: {
//       duration: 2,
//       delay: 3,
//       ease: "easeInOut",
//     },
//   },
// };
const Logo = () => {
  return (
    <div className="logo">
      <motion.a
        className="logo__text"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        o.a.m.
        <br />
        <span>portfolio</span>
      </motion.a>
    </div>
  );
};

export default Logo;
