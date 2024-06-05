import VideoPlayer from "../components/VideoPlayer";
import isMobile from "../utils/isMobile";

export default ({ source, url, index }) => {
  let player;
  if (source == "fsm3u8" && url) {
    player = (
      <VideoPlayer
        src={url ? url.urls[index].url : ""}
        width={isMobile ? "300" : "1000"}
      />
    );
  } else {
    player = (
      <iframe
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
