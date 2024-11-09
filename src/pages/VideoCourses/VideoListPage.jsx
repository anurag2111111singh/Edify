import React from "react";
import { Link } from "react-router-dom"; // For navigation
import "./VideoListPage.css";

// Import video data from videosList.js
import { VideoList } from "../../assets/videosList";

export const VideoListPage = () => {
  return (
    <div className="ListPage">
      <h1>Start Leaning</h1>
      <div className="videos">
        {VideoList.map((video) => (
          <div key={video.id} className="video-card">
            <img src={video.image} alt={video.name} />
            <h3 className="videoName">{video.name}</h3>
            <Link className="video-button" to={`/streamer/${video.id}`}>
              <p>Watch Video</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
