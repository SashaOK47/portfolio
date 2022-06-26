import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../../components/Cursor/CursorManager";
import { ModalContext } from "../../components/Modal/ModalManager";

import "./style.scss";
import CoverVideo from "../../components/CoverVideo";
import { socialLinks } from "../../data/data";
import Button from "../../components/Button";

const transition = { duration: 1.4, ease: "easeInOut", delay: .5 };

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const Intro = () => {
  const { hovered, setHovered } = useContext(CursorContext);
  const { setActive } = useContext(ModalContext);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 4000)
  }, [])

  return (
    <>
      <CoverVideo />
      <div className="intro wrapper" id="intro">
        <div className="intro__wrapper">
          <motion.div className="intro__title" variants={container} initial="hidden" animate="show">
            <motion.span variants={item}>a</motion.span>
            <motion.span variants={item}>l</motion.span>
            <motion.span variants={item}>e</motion.span>
            <motion.span variants={item}>k</motion.span>
            <motion.span variants={item}>s</motion.span>
            <motion.span variants={item}>a</motion.span>
            <motion.span variants={item}>n</motion.span>
            <motion.span variants={item}>d</motion.span>
            <motion.span variants={item}>r</motion.span>
            <div className="firstname">
              <motion.span variants={item}>o</motion.span>
              <motion.span variants={item}>k</motion.span>
              <motion.span variants={item}>o</motion.span>
              <motion.span variants={item}>r</motion.span>
              <motion.span variants={item}>o</motion.span>
              <motion.span variants={item}>n</motion.span>
              <motion.span variants={item}>k</motion.span>
              <motion.span variants={item}>o</motion.span>
            </div>
          </motion.div>
          <motion.div
            className="intro__subtitle"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: transition }}
          >
            front-end developer
          </motion.div>
          <motion.div
              className="intro__btn"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: transition }}
          >
            <Button onClick={() => setActive(true)} className="intro__cv">
              download cv
            </Button>
            {/*<button*/}
            {/*  type="button"*/}
            {/*  className="intro__cv"*/}
            {/*  onMouseEnter={() => setHovered(!hovered)}*/}
            {/*  onMouseLeave={() => setHovered(false)}*/}
            {/*  onClick={() => setActive(true)}*/}
            {/*>*/}
            {/*  download cv*/}
            {/*</button>*/}
          </motion.div>
        </div>
        <motion.ul
          className="intro__socials socials"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: transition }}
        >
          {socialLinks.map(link => (
              <li className="socials__item" key={link.id} onMouseEnter={() => setHovered(!hovered)} onMouseLeave={() => setHovered(false)}>
                <a className="socials__link" href={link.url} target="_blank">{link.title}</a>
              </li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};

export default Intro;
