import React, { useEffect, useRef } from "react";
import Videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ height, width, src }) => {
  const videoRef = useRef(null);
  let player = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      player.current = Videojs(videoRef.current, {
        height,
        width,
        bigPlayButton: true,
        textTrackDisplay: false,
        errorDisplay: false,
        controlBar: true,
        type: "application/x-mpegURL",
      });
      return () => {
        if (player.current) {
          player.current.dispose();
          player.current = null;
        }
      };
    }
  }, [height, width]);

  useEffect(() => {
    player.current.src({ src });
    player.current.play();
  }, [src]);

  return (
    <video ref={videoRef} className="video-js" controls preload="auto"></video>
  );
};

export default VideoPlayer;
