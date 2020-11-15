import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts/");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
    console.log("post fetched")
  }, []);
  console.log(videos);  

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map( video => (
            <Video
              url={video.url}
              channel={video.channel}
              description={video.description}
              song={video.song}
              likes={video.likes}
              messages={video.messages}
              shares={video.shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
