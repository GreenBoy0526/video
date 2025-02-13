import VideoPlayer from "../components/VideoPlayer";
import isMobile from "../utils/isMobile";

 const VideoPlayers=({ source, url, index }) => {
  let player;
  if (source == "wjm3u8" && url) {
    player = (
      <VideoPlayer
        src={url ? url.urls[index].url : ""}
        width={isMobile ? "300" : "1000"}
      />
    );
  } else {
    player = (
      <iframe
        title="video"
        src={url ? url.urls[index].url : ""}
        width={isMobile ? "300" : "1000"}
        height={isMobile ? "168.6" : "562"}
        allowFullScreen={true}
        style={{ border: "none" }}
      ></iframe>
    );
  }

  return (
    <div style={{ margin: "0 auto", width: isMobile ? 300 : 1000 }}>
      {player}
    </div>
  );
};
export default VideoPlayers