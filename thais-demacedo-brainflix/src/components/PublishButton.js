import '../components/Button.scss';
import '../components/Global.scss';
import CommentPublished from '../assets/Icons/publish.svg';

function PublishButton() {
  return (
    <div className="navigation-bar__box3">
      <button className="navigation-bar__button">
        <div className="navigation-bar__button-emoji">
          <img
            className="navigation-bar__button-icon"
            src={CommentPublished}
            alt="publish svg"
          />
        </div>
        <div className="navigation-bar__button-text">PUBLISH</div>
      </button>
    </div>
  );
}

export default PublishButton;
