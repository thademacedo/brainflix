import "../components/Avatar.scss";
import "../components/Global.scss";
import ProfilePic from "../assets/Images/Mohan-muruge.jpg";

function Avatar() {
  return (
    <div className="navigation-bar__pic">
      <img
        className="navigation-bar__profile"
        src={ProfilePic}
        placeholder="placeholder-avatar"
        alt="peopleImage"
      ></img>
    </div>
  );
}

export default Avatar;
