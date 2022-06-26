import { useContext } from "react";
import { CursorContext } from "../../components/Cursor/CursorManager";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import Button from "../../components/Button";
import { linksMenu } from "../../data/data";
import "./style.scss";

const Footer = () => {
  const { scroll } = useLocomotiveScroll();
  const { hovered, setHovered } = useContext(CursorContext);
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easeing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <footer className="footer" id="contacts">
      <div className="footer__wrap">
        <p className="footer__title" data-scroll data-scroll-speed="2">
          Okoronko Aleksandr
        </p>
        <p className="footer__subtitle" data-scroll data-scroll-speed="-1">
          frontend developer
        </p>
      </div>
      {/* <div className="footer__btn">
        <Button className="footer__cv">download cv</Button>
      </div> */}

      <motion.div
        className="footer__component"
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* <ul>
          <li onClick={() => handleScroll('#home')}>home</li>
          <li onClick={() => handleScroll('#skills')}>skills</li>
          <li onClick={() => handleScroll('#projects')}>projects</li>
          <li onClick={() => handleScroll('#applications')}>applications</li>
        </ul> */}
        <ul>
          {linksMenu.map((link) => (
            <li key={link.id}>
              <a
                onClick={() => handleScroll(link.url)}
                onMouseEnter={() => setHovered(!hovered)}
                onMouseLeave={() => setHovered(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer__bottom">
          <span
            className="footer__copyright"
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
          <a
            className="footer_email"
            href="mailto:mail@mail.ru"
            onMouseEnter={() => setHovered(!hovered)}
            onMouseLeave={() => setHovered(false)}
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            mail@mail.ru
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
