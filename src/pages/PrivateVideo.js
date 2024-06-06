import { useRef } from "react";
import { Button } from "antd";

const videoBaseUrl = "https://cdn.jsdelivr.net/gh/GreenBoy0526/video/assets/";

let videos = [
  {
    name: "五行",
    url: videoBaseUrl + "video/五行.mp4",
  },
  {
    name: "进宫",
    url: videoBaseUrl + "video/进宫.mp4",
  },
  {
    name: "黑土白云",
    url: videoBaseUrl + "video/黑土白云.mp4",
  },
  {
    name: "公主病",
    url: videoBaseUrl + "video/公主病.mp4",
  },
  {
    name: "公主病（重口）",
    url: videoBaseUrl + "video/公主病（重口）.mp4",
  },
];

let videosrc = videos[0].url;

const PrivateVideo= () => {
  let videoRef = useRef(null);
  return (
    <div style={{textAlign:'center'}}>
      <video controls autoPlay ref={videoRef}>
        <source src={videosrc} type="video/mp4" />
      </video>
      <hr />

      {videos.map((item) => {
        return (
          <Button
            key={item.url}
            onClick={() => {
              videoRef.current.src = item.url;
            }}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
};
export default PrivateVideo