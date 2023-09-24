import "../components/Button.scss";
import "../components/Global.scss";

function CancelButton() {
  return (
    <div className="cancel">
      <button className="cancel-button">
        <div className="cancel-button__button-text">CANCEL</div>
      </button>
    </div>
  );
}

export default CancelButton;
