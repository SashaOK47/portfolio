import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef, useContext } from "react";
import { CursorContext } from "../../components/Cursor/CursorManager";
import { ModalContext } from "../../components/Modal/ModalManager";

import "./style.scss";

import img1 from "../../assets/images/project-1.jpg";
import img2 from "../../assets/images/project-2.jpg";
import img3 from "../../assets/images/project-3.jpg";
import Button from "../../components/Button";

const NewProject = ({ img, title = "", urlLive, urlCode = "" }) => {
  const { hovered, setHovered } = useContext(CursorContext);
  const { setActive } = useContext(ModalContext);

  return (
    <motion.li
      className="new-projects__item"
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)", scale: 1.4 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <a
        className="new-projects__image"
        href={urlLive}
        target="_blank"
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={img} alt={title} />
      </a>
      <p className="new-projects__name">{title}</p>
      <div className="new-projects__info">
        <a
          className="new-projects__demo"
          href={urlLive}
          target="_blank"
          onMouseEnter={() => setHovered(!hovered)}
          onMouseLeave={() => setHovered(false)}
        >
          demo
        </a>
        <a
          className="new-projects__code"
          href={urlCode}
          target="_blank"
          onMouseEnter={() => setHovered(!hovered)}
          onMouseLeave={() => setHovered(false)}
        >
          github code
        </a>
      </div>
    </motion.li>
  );
};

const NewProjects = () => {
  const { hovered, setHovered } = useContext(CursorContext);
  const { setActive } = useContext(ModalContext);

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <section className="new-projects" ref={ref} id="projects">
      <h2 className="new-projects__title" data-scroll data-scroll-speed="-1">
        new projects
      </h2>
      <div className="new-projects__left">
        <p>
          Examples of <span>responsive</span> and <span>cross-browser</span>{" "}
          sites in HTML, CSS, JavaScript, React, Vue.
        </p>
        <Button className="new-projects__btn" onClick={() => setActive(true)}>
          view all
        </Button>
      </div>
      <div className="new-projects__right">
        <ul className="new-projects__list" ref={horizontalRef}>
          <NewProject
            img={img1}
            title="movee"
            urlLive="https://sashaok47.github.io/WD-tasks"
            urlCode="https://github.com/SashaOK47/WD-tasks/"
          />
          <NewProject
            img={img2}
            title="breaking bad"
            urlLive="https://sashaok47.github.io/Breaking-Bad/"
            urlCode="https://github.com/SashaOK47/Breaking-Bad"
          />
          <NewProject
            img={img3}
            title="Personal Portfolio"
            urlLive="/"
            urlCode="!#"
          />
          <NewProject
            img={img2}
            title="Test"
            urlLive="https://sashaok47.github.io/Breaking-Bad/"
            urlCode="https://github.com/SashaOK47/Breaking-Bad"
          />
        </ul>
      </div>
    </section>
  );
};

export default NewProjects;
