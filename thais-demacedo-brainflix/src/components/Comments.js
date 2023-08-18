import "../components/Comments.scss";
import "../components/Global.scss";
import Avatar from "./Avatar";
import CommentButton from "./CommentButton";
import PostedComments from "./PostedComments";

function Comments({ currentVideo }) {
  return (
    <section className="comments">
      <div className="comments-box1">
        <p>
          <strong>3 Comments</strong>
        </p>
      </div>

      <div className="comments-box2">
        <div className="comments-box2__pic">
          <Avatar />
        </div>

        <div className="comments-box2__post">
          <div className="comments-box2__post-title">
            <h4 className="comments-box2__post-text">JOIN THE CONVERSATION</h4>
          </div>

          <div className="comments-box2__post-field">
            <form id="commentsForm" className="comments-box2__form">
              <div className="comments-box2__field">
                <textarea id="commentsText" className="comments-box2__text">
                  Add a new comment
                </textarea>
              </div>
              <div className="comments-box2__button">
                <CommentButton />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="comments-box3">
        <PostedComments currentVideo={currentVideo} />
      </div>
    </section>
  );
}

export default Comments;
