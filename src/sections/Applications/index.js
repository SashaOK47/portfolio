import React, { useRef, useLayoutEffect } from "react";
import "./style.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../../assets/images/app-1.png";
import img2 from "../../assets/images/app-2.png";
import img3 from "../../assets/images/app-1.png";
import img4 from "../../assets/images/app-2.png";
import img5 from "../../assets/images/app-1.png";
import img6 from "../../assets/images/app-2.png";

const App = ({ img, title = "", url }) => {
  return (
    <div className="applications__item">
      <a href={url} target="_blank">
        <img className="applications__image" src={img} alt={title} />
      </a>
      <p className="applications__name">{title}</p>
    </div>
  );
};

const Applications = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom top-=100%",
          scroller: ".App",
          scrub: true,
          pin: true,
          // markers: true,
        },
        ease: "none",
      });
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: true,
            // markers: true,
          },
        }
      );
      ScrollTrigger.refresh();
    }, 1000);
    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <section className="applications" ref={ref} id="applications">
      <div className="applications__overlay" />
      <h1
        className="applications__title"
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
      >
        Apps
      </h1>
      <div className="applications__list" ref={ScrollingRef}>
        <App
          img={img1}
          title="ToDo app vue.js"
          url="https://sashaok47.github.io/wd-vue/"
        />
        <App img={img2} title="Test" url="!#" />
        <App
          img={img3}
          title="ToDo app vue.js"
          url="https://sashaok47.github.io/wd-vue/"
        />
        <App img={img4} title="Test" url="!#" />
        <App
          img={img5}
          title="ToDo app vue.js"
          url="https://sashaok47.github.io/wd-vue/"
        />
        <App img={img6} title="Test" url="!#" />
      </div>
      <div className="applications__text">
        <p>
          Examples of <span>responsive</span> and <span>cross-browser</span>{" "}
          applications in HTML, CSS, JavaScript, React, Vue.
        </p>
      </div>
    </section>
  );
};

export default Applications;
