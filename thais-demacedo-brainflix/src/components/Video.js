import "../components/Video.scss";
import videoData from "../assets/Data/video-details.json";

function Video() {
  return (
    <div className="video-hero">
      <video
        className="video-size"
        controls
        poster={videoData[0].image}
      ></video>
    </div>
  );
}

export default Video;
