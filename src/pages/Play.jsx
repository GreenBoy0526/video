import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import qs from "qs";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Episode from "../components/Episode";
import VideoPlayers from "../components/VideoPlayers";

import { getVideoInfo } from "../api/video";

class Play extends Component {
  componentDidMount() {
    let { id } = qs.parse(this.props.location.search.slice(1));
    getVideoInfo(id).then((detail) => {
      document.title = `${detail.vod_name}-乐坏影视`;
      this.setState({
        detail,
        id,
        sources: detail.vod_play_url,
      });
    });
  }

  state = {
    detail: null,
  };
  render() {
    const detail = this.state.detail || {};
    let { vod_name } = detail;
    let { source, index } = qs.parse(this.props.location.search.slice(1));

    index -= 1;
    let url = this.state.sources?.find(function (element) {
      return element.name == source;
    });
    let now_vod_name = "";
    if (url) {
      now_vod_name = url.urls[index].name;
      document.title = `${vod_name + now_vod_name}-乐坏影视`;
    }

    return (
      <div style={{ margin: "2rem auto", width: "80%" }}>
        <Breadcrumb
          items={[
            {
              title:<HomeOutlined />,
              // eslint-disable-next-line no-restricted-globals
              href:location.origin+location.pathname
            },
            {
              title: <Link to={"/s?wd=" + vod_name}>搜索：{vod_name}</Link>,
            },
            {
              title: <Link to={"/d?id=" + this.state.id}>{vod_name}</Link>,
            },
            {
              title: now_vod_name,
            },
          ]}
        >
        </Breadcrumb>

        <VideoPlayers source={source} url={url} index={index}></VideoPlayers>

        {this.state.detail && <Episode sources={this.state.sources}></Episode>}
      </div>
    );
  }
}

export default withRouter(Play);
