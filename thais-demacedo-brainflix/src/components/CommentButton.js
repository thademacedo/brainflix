import "../components/Button.scss";
import "../components/Global.scss";
import AddComment from "../assets/Icons/add_comment.svg";

function CommentButton() {
  return (
    <div className="navigation-bar__box3">
      <button className="navigation-bar__button">
        <div className="navigation-bar__button-emoji">
          <img className="navigation-bar__button-icon" src={AddComment} />
        </div>
        <div className="navigation-bar__button-text">COMMENT</div>
      </button>
    </div>
  );
}

export default CommentButton;
