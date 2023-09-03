import "../components/Global.scss";
import "./UploadPage.scss";
import ThumbnailVideo from "../assets/Images/Upload-video-preview.jpg";
import PublishButton from "../components/PublishButton";
import CancelButton from "../components/CancelButton";

function UploadPage() {
  return (
    <section className="upload-page">
      <div className="upload-video__title">
        <h2>Upload Video</h2>
      </div>
      <div className="upload-video__thumbnail">
        <h5>VIDEO THUMBNAIL</h5>
        <img
          className="upload-video__img"
          src={ThumbnailVideo}
          placeholder="placeholder-video"
        ></img>
      </div>
      <div className="upload-video__form">
        <form id="uploadForm" className="upload-video__form">
          <div className="upload-video__field">
            <div>
              <h5>TITLE YOUR VIDEO</h5>
              <textarea id="uploadText" className="upload-video__text-title">
                Add a title to your video
              </textarea>
            </div>
            <div className="upload-video__description">
              <h5>ADD A VIDEO DESCRIPTION</h5>
              <textarea
                id="uploadText"
                className="upload-video__text-description"
              >
                Add a description to your video
              </textarea>
            </div>
          </div>
          <div className="upload-video__buttons">
            <div>
              <PublishButton />
            </div>
            <div>
              <CancelButton />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UploadPage;
