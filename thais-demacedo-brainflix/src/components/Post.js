import '../components/Post.scss';
import '../components/Global.scss';
import Views from '../assets/Icons/views.svg';
import Likes from '../assets/Icons/likes.svg';

function Post({ currentVideo }) {
  let timestmp = new Date(currentVideo.timestamp);
  let dateFinalFormat =
    timestmp.getDate() +
    '/' +
    (timestmp.getMonth() + 1) +
    '/' +
    timestmp.getFullYear();
  return (
    <section className="post-box">
      <div className="post-box__1">
        <h2>{currentVideo.title}</h2>
      </div>

      <div className="post-box__2">
        <div className="post-box__info1">
          <div className="post-box__author">
            <h3>By {currentVideo.channel}</h3>
          </div>
          <div className="post-box__date">
            <p>{dateFinalFormat}</p>
          </div>
        </div>

        <div className="post-box__info2">
          <div className="post-box__views">
            <img src={Views} className="post-box__icon" alt="views svg" />
            <p>{currentVideo.views}</p>
          </div>
          <div className="post-box__likes">
            <img src={Likes} className="post-box__icon" alt="likes svg" />
            <p>{currentVideo.likes}</p>
          </div>
        </div>
      </div>

      <div className="post-box__3">
        <p>{currentVideo.description}</p>
      </div>
    </section>
  );
}

export default Post;
