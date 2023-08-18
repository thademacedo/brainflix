import "../components/Post.scss";
import "../components/Global.scss";
import Views from "../assets/Icons/views.svg";
import Likes from "../assets/Icons/likes.svg";
import videoData from "../assets/Data/video-details.json";

function Post() {
  return (
    <section className="post-box">
      <div className="post-box__1">
        <h2>{videoData[0].title}</h2>
      </div>

      <div className="post-box__2">
        <div className="post-box__info1">
          <div className="post-box__author">
            <h3>By {videoData[0].channel}</h3>
          </div>
          <div className="post-box__date">
            <p>{videoData[0].timestamp}</p>
          </div>
        </div>

        <div className="post-box__info2">
          <div className="post-box__views">
            <img src={Views} className="post-box__icon" />
            <p>{videoData[0].views}</p>
          </div>
          <div className="post-box__likes">
            <img src={Likes} className="post-box__icon" />
            <p>{videoData[0].likes}</p>
          </div>
        </div>
      </div>

      <div className="post-box__3">
        <p>{videoData[0].description}</p>
      </div>
    </section>
  );
}

export default Post;
