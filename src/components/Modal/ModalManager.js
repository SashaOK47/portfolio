import React, { useState, createContext } from "react";

export const ModalContext = createContext({
  active: false,
  setActive: () => {},
});

export default function ModalManager(props) {
  const [active, setActive] = useState(false);

  return (
    <ModalContext.Provider value={{ active, setActive }}>
      {props.children}
    </ModalContext.Provider>
  );
}
