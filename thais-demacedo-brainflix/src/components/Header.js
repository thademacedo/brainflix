import '../components/Header.scss';
import '../components/Global.scss';
import Logo from '../assets/Logo/BrainFlix-logo.svg';
import UploadButton from './UploadButton';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navigation-bar">
      <div className="navigation-bar__box1">
        <div className="navigation-bar__logo">
          <Link to="/">
            <img src={Logo} alt="brainflix logo"></img>
          </Link>
        </div>
      </div>
      <div className="navigation-bar__box2">
        <div className="navigation-bar__search-bar">
          <form className="nosubmit">
            <input className="nosubmit" type="search" placeholder="Search..." />
          </form>
        </div>
        <div className="navigation-bar__pic">
          <Avatar />
        </div>
      </div>
      <div className="navigation-bar__box3">
        <UploadButton />
      </div>
    </div>
  );
}

export default Header;
