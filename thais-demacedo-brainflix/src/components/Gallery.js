import "../components/Gallery.scss";
import "../components/Global.scss";
import videos from "../assets/Data/videos.json";

function Gallery() {
  console.log(videos);

  return (
    <section>
      <div className="gallery-title">
        <h4>NEXT VIDEOS</h4>
      </div>
      {videos.map((video) => (
        <div className="gallery-video">
          <img
            height="70px"
            width="100px"
            key={video.id}
            className="gallery-video__img"
            src={video.image}
          />{" "}
          <div className="gallery-video__info">
            <span className="gallery-video__title">{video.title}</span>
            <span className="gallery-video__channel">{video.channel}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Gallery;
