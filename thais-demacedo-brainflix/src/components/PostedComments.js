import '../components/PostedComments.scss';
import '../components/Global.scss';
import Avatar from './Avatar';

function PostedComments({ currentVideo }) {
  return (
    <section>
      {currentVideo.comments.map((comment, idx) => (
        <div className="posted-comments" key={idx}>
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
