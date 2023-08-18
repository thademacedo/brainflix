import "../components/PostedComments.scss";
import "../components/Global.scss";
import comments from "../assets/Data/video-details.json";
import Avatar from "./Avatar";

function PostedComments({ currentVideo }) {
  console.log(comments);

  return (
    <section>
      {currentVideo.comments.map((comments) => (
        <div className="posted-comments">
          <div className="posted-comments__pic">
            <Avatar />
          </div>
          <div>
            <div className="posted-comments__name">
              <span>{comments.name}</span>
            </div>
            <div className="posted-comments__content">
              <span>{comments.comment}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PostedComments;
