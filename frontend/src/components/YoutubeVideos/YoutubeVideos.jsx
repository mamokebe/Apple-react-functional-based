import React, { useEffect, useState } from "react";
import "./YoutubeVideos.css";

const YoutubeVideos = () => {
  const [videos, setVideos] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const channelId = import.meta.env.VITE_CHANNEL_ID;

  // function fetching data
  const fetchData = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=9`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
        console.log(videos);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="allVideosWrapper">
      {/* video section */}
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper bold video-title-wrapper">
              <h1>Latest Videos</h1>
            </div>
          </div>
          {videos?.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let allVideos = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return allVideos;
          })}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideos;
