import "./App.scss";
import "./components/Global.scss";
import Header from "./components/Header";
import Video from "./components/Video";
import Post from "./components/Post";
import Comments from "./components/Comments";
import Gallery from "./components/Gallery";
import data from "./assets/Data/video-details.json";
import { useState } from "react";

function App() {
  const [currentVideo, setCurrentVideo] = useState(data[0]);
  console.log(currentVideo);
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Video />
      </div>
      <div className="post-comments-gallery">
        <div className="post-comments">
          <div>
            <Post />
          </div>
          <div>
            <Comments currentVideo={currentVideo} />
          </div>
        </div>
        <div>
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default App;
