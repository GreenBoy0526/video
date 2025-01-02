import React, { useEffect, useRef } from "react";
import Videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ height, width, src }) => {
  const videoRef = useRef(null);
  let player = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      let videoEl = document.createElement("video");
      videoEl.className = "video-js";
      videoEl.controls = true;
      videoEl.preload = "auto";
      videoRef.current.append(videoEl);
      player.current = Videojs(videoEl, {
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

  return <div ref={videoRef}> </div>;
};

export default VideoPlayer;
