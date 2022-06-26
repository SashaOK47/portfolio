import React, { useState, createContext } from "react";

export const CursorContext = createContext({
  hovered: false,
  setHovered: () => {},
});

export default function CursorManager(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <CursorContext.Provider value={{ hovered, setHovered }}>
      {props.children}
    </CursorContext.Provider>
  );
}
