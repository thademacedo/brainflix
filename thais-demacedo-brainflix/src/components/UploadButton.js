import "../components/Button.scss";
import "../components/Global.scss";
import ArrowUp from "../assets/Icons/upload.svg";

function UploadButton() {
  return (
    <div className="navigation-bar__box3">
      <button className="navigation-bar__button">
        <div className="navigation-bar__button-emoji">
          <img className="navigation-bar__button-icon" src={ArrowUp} />
        </div>
        <div className="navigation-bar__button-text">UPLOAD</div>
      </button>
    </div>
  );
}

export default UploadButton;
