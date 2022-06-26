import { useContext } from "react";
import classNames from "classnames";
import { CursorContext } from "../Cursor/CursorManager";
import "./style.scss";

const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  ...attrs
}) => {
  const { hovered, setHovered } = useContext(CursorContext);

  const onClickAction = (e) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };
  const classes = classNames("btn", className, { active });

  const Tag = attrs.href ? "a" : "button";

  return (
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(false)}
      {...attrs}
    >
      {children}
    </Tag>
  );
};

export default Button;
