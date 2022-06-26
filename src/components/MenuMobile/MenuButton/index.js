import React, { useContext } from "react";
import { MenuContext } from "../MenuManager";
import cn from "classnames";
import "./style.scss";
import { CursorContext } from "../../Cursor/CursorManager";

export default function MenuButton() {
  const { open, setOpen } = useContext(MenuContext);
  const { hovered, setHovered } = useContext(CursorContext);

  return (
    <div
      className={cn("menu-mobile__button", { open })}
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="menu-mobile__text" onClick={() => setOpen(!open)}>
        Menu
      </span>
      <button className="menu-mobile__btn" onClick={() => setOpen(!open)}>
        <span />
      </button>
    </div>
  );
}
