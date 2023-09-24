import './Home.scss';
import '../components/Global.scss';
import Video from '../components/Video';
import Post from '../components/Post';
import Comments from '../components/Comments';
import Gallery from '../components/Gallery';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import defaultVideo from '../assets/Data/defaultVideo';
function Home() {
  const [currentVideo, setCurrentVideo] = useState(defaultVideo);
  const [videoList, setVideoList] = useState([]);
  // const [id, setId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8');
  const { videoId } = useParams();

  useEffect(() => {
    //console.log('videoId ::',response.data[0].id));
    // axios
    //   .get(`http://localhost:8888/video` + videoId)
    //   .then((res) => {
    //     console.log('res.data', res.data);
    //     setCurrentVideo(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios
      .get(`http://localhost:8888`)
      .then((response) => {
        setVideoList(response.data);
        setCurrentVideo(response.data[0]);

        // setId(response.data[0].id);
        // console.log("res data::", response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, []);

  useEffect(() => {
    if (videoList.length > 0) {
      const currentid = videoId ? videoId : videoList[0].id;
      axios
        .get('http://localhost:8888/videos/' + currentid)
        .then((response) => {
          setCurrentVideo(response.data);
        });
    }
  }, [videoId, videoList]);

  return (
    <section>
      <div>
        <Video currentVideo={currentVideo} />
      </div>
      <div className="post-comments-gallery">
        <div className="post-comments">
          <div>
            <Post currentVideo={currentVideo} />
          </div>
          {currentVideo ? (
            <div>
              <Comments currentVideo={currentVideo} />
            </div>
          ) : (
            <div>
              <h1> No Comments</h1>
            </div>
          )}
        </div>
        <div>
          <Gallery videoList={videoList} currentVideo={currentVideo} />
        </div>
      </div>
    </section>
  );
}

export default Home;
