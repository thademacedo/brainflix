import "../components/PostedComments.scss";
import "../components/Global.scss";
import Avatar from "./Avatar";

function PostedComments({ currentVideo }) {
  console.log(currentVideo);
  console.log("hello world", currentVideo.comments);

  return (
    <section>
      {currentVideo.comments.map((comment) => (
        <div className="posted-comments">
          <div className="posted-comments__pic">
            <Avatar />
          </div>
          <div>
            <div className="posted-comments__name">
              <span>{comment.name}</span>
            </div>
            <div className="posted-comments__content">
              <span>{comment.comment}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PostedComments;
