import "../components/Video.scss";

function Video({ currentVideo }) {
  return (
    <div className="video-hero">
      <video
        className="video-size"
        controls
        poster={currentVideo.image}
      ></video>
    </div>
  );
}

export default Video;
