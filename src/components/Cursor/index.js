import React, { useRef, useContext, useEffect } from "react";
import { gsap } from "gsap";
import { CursorContext } from "./CursorManager";
import "./style.scss";

const Cursor = () => {
  const { hovered } = useContext(CursorContext);
  const cursor = useRef();
  const cursor2 = useRef();

  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to(cursor.current, {
        x: `${clientX}px`,
        y: `${clientY}px`,
        duration: 0.5,
        ease: "Power3.easeOut",
        overwrite: true,
      });

      gsap.to(cursor2.current, {
        x: `${clientX}px`,
        y: `${clientY}px`,
        duration: 0.8,
        ease: "Power3.easeOut",
        overwrite: true,
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      {/*<div className={cn("cursor", { hovered })} ref={cursor} />*/}
      {/*<div className={cn("cursor2", { hovered })} ref={cursor2} />*/}
      <div className={hovered ? "cursor hovered" : "cursor"} ref={cursor} />
      <div className={hovered ? "cursor2 hovered" : "cursor2"} ref={cursor2} />
    </>
  );
};

export default Cursor;
