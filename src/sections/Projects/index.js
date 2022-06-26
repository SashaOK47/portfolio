import React, { useContext } from "react";

import { CursorContext } from "../../components/Cursor/CursorManager";
import { ModalContext } from "../../components/Modal/ModalManager";

import { projects } from "../../data/data";
import "./style.scss";
import Button from "../../components/Button";

const NProject = () => {
  const { hovered, setHovered } = useContext(CursorContext);
  const { setActive } = useContext(ModalContext);
  return (
    <section className="projects">
      <h2
        className="projects__title"
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
      >
        project
      </h2>
      <div className="projects__list">
        {projects.map((project) => (
          <div className="projects__item" key={project.id}>
            <div className="projects__description">
              <p className="projects__num">0{project.id}</p>
              <p className="projects__name">{project.title}</p>
              <div className="projects__info">
                <span className="projects__type">{project.type}</span>
                <span className="projects__line" />
                <span className="projects__year">{project.year}</span>
              </div>
              <div className="projects__links">
                <a
                  className="projects__link"
                  href={project.linkCode}
                  target="_blank"
                  onMouseEnter={() => setHovered(!hovered)}
                  onMouseLeave={() => setHovered(false)}
                >
                  github code
                </a>
                <a
                  className="projects__link"
                  href={project.linkDemo}
                  target="_blank"
                  onMouseEnter={() => setHovered(!hovered)}
                  onMouseLeave={() => setHovered(false)}
                >
                  demo
                </a>
              </div>
            </div>
            <div
              className="projects__img"
              onMouseEnter={() => setHovered(!hovered)}
              onMouseLeave={() => setHovered(false)}
            >
              <a href={project.linkDemo} target="_blank">
                <img src={project.img} alt={project.title} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="projects__btn">
        {/*<button*/}
        {/*  type="button"*/}
        {/*  onMouseEnter={() => setHovered(!hovered)}*/}
        {/*  onMouseLeave={() => setHovered(false)}*/}
        {/*  onClick={() => setActive(true)}*/}
        {/*>*/}
        {/*  view all*/}
        {/*</button>*/}
        <Button onClick={() => setActive(true)}>view all</Button>
      </div>
    </section>
  );
};

export default NProject;
