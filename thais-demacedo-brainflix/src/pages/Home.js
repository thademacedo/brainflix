import "./Home.scss";
import "../components/Global.scss";
import Video from "../components/Video";
import Post from "../components/Post";
import Comments from "../components/Comments";
import Gallery from "../components/Gallery";
import data from "../assets/Data/video-details.json";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [currentVideo, setCurrentVideo] = useState(data[0]);
  console.log(currentVideo);

  return (
    <section>
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
    </section>
  );
}

export default Home;
