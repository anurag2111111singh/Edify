import React from "react";
import { useParams } from "react-router-dom"; // For accessing URL parameters
import "./streamer.css";
// Import video data from videosList.js
import { VideoList } from "../../assets/videosList";

export const VideoPlayerPage = () => {
  const { id } = useParams(); // Get the video ID from the URL parameter
  const selectedVideo = VideoList.find((video) => video.id === id);
  if (!selectedVideo) {
    return <div>Video not found</div>;
  }

  return (
    <div className="streamer">
      <div className="video-player-left">
        <iframe
          //   width="560"
          //           height="315"

          src={selectedVideo.embedLink}
          title={selectedVideo.name}
          frameBorder="0"
          allow="accelerometer; gyroscope; picture-in-picture; "
          allowFullScreen
        />
        <div className="video-bottom-1">
          <div className="video-name-button">
            <h2>{selectedVideo.name}</h2>
            <button>Add to Classroom</button>
          </div>
          <p>
            Course by <span>{selectedVideo.instructorname}</span>
          </p>
        </div>
      </div>
      <div className="video-player-right">
        <div className="instructor-about">
          <h3>About the instructor</h3>
          <div className="about-name-image">
            <img src={selectedVideo.instructorImage} alt="" />
            <p>{selectedVideo.instructorname}</p>
          </div>
          <p className="instructor-bio">{selectedVideo.instructorBio}</p>
        </div>
        <div className="suggested-videos">
          <h3>Suggested Courses</h3>
          {VideoList.map((video) => {
            if (video.id !== selectedVideo.id) {
              return (
                <div className="suggestion">
                  <div className="video-image">
                    <img src={video.image} alt={video.name} />
                  </div>
                  <div className="suggestion-name">
                    <p key={video.id}>{video.name}</p>
                    <p className="instructor-name">{video.instructorname}</p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};
