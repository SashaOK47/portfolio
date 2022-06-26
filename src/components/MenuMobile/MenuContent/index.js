import React, { useContext } from "react";
import { MenuContext } from "../MenuManager";
import { CursorContext } from "../../Cursor/CursorManager";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import cn from "classnames";
import "./style.scss";
import { linksMenu } from "../../../data/data";
import { socialLinks } from "../../../data/data";

export default function MenuContent() {
  const { scroll } = useLocomotiveScroll();
  const { open, setOpen } = useContext(MenuContext);
  const { hovered, setHovered } = useContext(CursorContext);

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setOpen(false);
    scroll.scrollTo(elem, {
      offset: "0",
      duration: "2000",
      easeing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <div className={cn("menu-mobile__wrapper", { open })}>
      <div className="menu-mobile__content">
        <div className="menu-mobile__left">
          <ul className="menu-mobile__nav nav">
            {linksMenu.map((link) => (
              <li className="nav__item" key={link.id}>
                <a
                  className="nav__link"
                  onClick={() => handleScroll(link.url)}
                  onMouseEnter={() => setHovered(!hovered)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-mobile__right">
          <div className="menu-mobile__phone">
            Phone
            <a
              href="tel:+375292591772"
              onMouseEnter={() => setHovered(!hovered)}
              onMouseLeave={() => setHovered(false)}
            >
              +123 45 678-90-00
            </a>
          </div>
          <div className="menu-mobile__email">
            Email
            <a
              href="mailto:mail@mail.ru"
              onMouseEnter={() => setHovered(!hovered)}
              onMouseLeave={() => setHovered(false)}
            >
              mail@mail.ru
            </a>
          </div>
          <div className="menu-mobile__address">
            Address
            <p>Belarus, Brest</p>
          </div>
          <ul className="menu-mobile__social social">
            <p>Socials</p>
            {socialLinks.map((link) => (
              <li className="social__item" key={link.id}>
                <a
                  className="social__link"
                  href={link.url}
                  target="_blank"
                  onMouseEnter={() => setHovered(!hovered)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
