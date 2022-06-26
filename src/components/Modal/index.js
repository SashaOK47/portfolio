import React, { useContext } from "react";
import "./style.scss";
import { ModalContext } from "./ModalManager";
import { CursorContext } from "../Cursor/CursorManager";

const Modal = ({ children }) => {
  const { active, setActive } = useContext(ModalContext);
  const { hovered, setHovered } = useContext(CursorContext);
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={() => setActive(false)} onMouseEnter={() => setHovered(!hovered)}
              onMouseLeave={() => setHovered(false)} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
