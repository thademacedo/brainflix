import '../components/Gallery.scss';
import '../components/Global.scss';
import { Link } from 'react-router-dom';

function Gallery({ videoList, currentVideo }) {
  const allVideosButCurrent = videoList.filter(
    (obj) => obj.id !== currentVideo.id
  );
  return (
    <section>
      <div className="gallery-title">
        <h4>NEXT VIDEOS</h4>
      </div>
      {allVideosButCurrent.map((video, idx) => (
        <Link to={`/videos/${video.id}`} key={idx}>
          <div className="gallery-video">
            <img
              height="70px"
              width="100px"
              key={video.id}
              className="gallery-video__img"
              src={video.image}
              alt="galleryImg"
            />{' '}
            <div className="gallery-video__info">
              <span className="gallery-video__title">{video.title}</span>
              <span className="gallery-video__channel">{video.channel}</span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Gallery;
