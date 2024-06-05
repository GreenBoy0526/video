import { Route } from "react-router-dom";
import NavMenu from "./components/NavMenu.jsx";
import VodList from "./pages/VodList";
import Detail from "./pages/Detail";
import Play from "./pages/Play";
import PrivateVideo from "./pages/PrivateVideo.js";

import { Button } from "antd";
import { useHistory } from "react-router-dom";

const App = () => {
  let history = useHistory();
  const toMyVideo = () => {
    history.push(`/private`);
  };

  return (
    <div>
      <NavMenu></NavMenu>
      <Route path="/s" component={VodList}></Route>
      <Route path="/d" component={Detail}></Route>
      <Route path="/v" component={Play}></Route>
      <Route path="/private" component={PrivateVideo}></Route>

      <div
        style={{ maxWidth: "80%", margin: "10rem auto", textAlign: "center" }}
      >
        <div>
          本站所有资源来源于互联网网友交流,只供网络测试和学习交流所用、所有视频版权归原权利人，如有关视频侵犯了你的权益，请联系告之，我们将于第一时间删除！
        </div>
        <div>
          <Button type="link" onClick={toMyVideo}>我们</Button>
          建议所有影视爱好者购买正版音像制品或去电影院观看最新大片。
        </div>
      </div>
    </div>
  );
};

export default App;
