import React, { useRef, useState, useContext } from "react";
import music from "../../assets/audio/sound.mp3";
import "./style.scss";
import { CursorContext } from "../Cursor/CursorManager";

const SoundBar = () => {
  const refAudio = useRef(null);
  const refBtn = useRef(null);
  const [click, setClick] = useState(false);
  const { hovered, setHovered } = useContext(CursorContext);

  let className = "sound-bar__line";

  if (click) {
    className += " running";
  } else {
    className += " paused";
  }

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      refAudio.current.play();
      refAudio.current.volume = 0.4;
    } else {
      refAudio.current.pause();
    }
  };

  window.onfocus = function () {
    !click ? refAudio.current.pause() : refAudio.current.play();
  };

  window.onblur = function () {
    refAudio.current.pause();
  };

  return (
    <div
      className="sound-bar"
      ref={refBtn}
      onClick={() => handleClick()}
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(false)}
      // data-scroll
      // data-scroll-sticky
      // data-scroll-target="#app"
    >
      <span className={className} />
      <span className={className} />
      <span className={className} />
      <span className={className} />
      <span className={className} />
      {!click ? (
        <span className="sound-bar__text">Sound on</span>
      ) : (
        <span className="sound-bar__text">Sound off</span>
      )}
      <audio src={music} ref={refAudio} loop />
    </div>
  );
};

export default SoundBar;
