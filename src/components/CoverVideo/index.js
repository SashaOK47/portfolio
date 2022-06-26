import MainVideo from "../../assets/video/bg.mp4";
import "./style.scss";

const CoverVideo = () => {
  return (
    <div className="video-container">
      <div className="video-overlay" />
      <video src={MainVideo} type="video/mp4" autoPlay loop muted />
    </div>
  );
};

export default CoverVideo;
