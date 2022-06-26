import React, { useState, useContext } from "react";
import "./style.scss";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { CursorContext } from "../Cursor/CursorManager";

const transition = { duration: 1.4, ease: "easeInOut", delay: 1.5 };

const NavBar = () => {
  const [click, setClick] = useState(false);
  const { scroll } = useLocomotiveScroll();
  const { hovered, setHovered } = useContext(CursorContext);

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: 0,
      duration: "2000",
      easeing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <motion.nav
      className="menu"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 2.2, ...transition } }}
    >
      <ul className="menu__list">
        <li className="menu__item">
          <a
            className="menu__link"
            onClick={() => handleScroll("#home")}
            onMouseEnter={() => setHovered(!hovered)}
            onMouseLeave={() => setHovered(false)}
          >
            home
          </a>
        </li>
        <li className="menu__item">
          <a
            className="menu__link"
            onClick={() => handleScroll("#skills")}
            onMouseEnter={() => setHovered(!hovered)}
            onMouseLeave={() => setHovered(false)}
          >
            skills
          </a>
        </li>
        <li className="menu__item">
          <a
            className="menu__link"
            onClick={() => handleScroll("#projects")}
            onMouseEnter={() => setHovered(!hovered)}
            onMouseLeave={() => setHovered(false)}
          >
            projects
          </a>
        </li>
        <li className="menu__item">
          <a
            className="menu__link"
            onClick={() => handleScroll("#applications")}
            onMouseEnter={() => setHovered(!hovered)}
            onMouseLeave={() => setHovered(false)}
          >
            applications
          </a>
        </li>
        <li className="menu__item">
          <a
            className="menu__link"
            onClick={() => handleScroll("#contacts")}
            onMouseEnter={() => setHovered(!hovered)}
            onMouseLeave={() => setHovered(false)}
          >
            contacts
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
