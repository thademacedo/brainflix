import '../components/Button.scss';
import '../components/Global.scss';
import ArrowUp from '../assets/Icons/upload.svg';
import { Link } from 'react-router-dom';

function UploadButton() {
  return (
    <div className="navigation-bar__box3">
      <Link to="/UploadPage">
        <button className="navigation-bar__button">
          <div className="navigation-bar__button-emoji">
            <img
              className="navigation-bar__button-icon"
              src={ArrowUp}
              alt="arrow up"
            />
          </div>
          <div className="navigation-bar__button-text">UPLOAD</div>
        </button>
      </Link>
    </div>
  );
}

export default UploadButton;
