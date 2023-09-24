import "../components/Video.scss";

function Video({ currentVideo }) {
  // console.log("in video", currentVideo);
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
