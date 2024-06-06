import { Component } from "react";
import { withRouter } from "react-router-dom";
import qs from "qs";
import { Tag, Space } from "antd";
import Episode from "../components/Episode";
import { getVideoInfo } from "../api/video";

class Detail extends Component {
  componentDidMount() {
    let id = qs.parse(this.props.location.search.slice(1)).id;
    getVideoInfo(id).then((detail) => {
      document.title = `${detail.vod_name}-乐坏影视`;
      this.setState({
        detail,
        sources: detail.vod_play_url,
      });
    });
  }

  state = {
    detail: null,
  };
  render() {
    const detail = this.state.detail || {};
    let {
      vod_name,
      type_name,
      vod_remarks,
      vod_time,
      vod_director,
      vod_actor,
      vod_area,
      vod_pic,
      vod_blurb,
    } = detail;
    return (
      <div style={{ margin: "2rem auto", width: "80%" }}>
        <Space align="center" wrap>
          <div style={{ width: 200, height: 200 }}>
            <img src={vod_pic} alt="" height="100%" />
          </div>
          <div style={{ maxWidth: 1000 }}>
            <p>
              {vod_name} <Tag>{vod_remarks}</Tag>
            </p>
            <p>导演：{vod_director || "不详"}</p>
            <p>主演：{vod_actor || "不详"}</p>
            <p>
              类型：{type_name} 地区：{vod_area}
            </p>
            <p>更新：{vod_time}</p>
            <p>简介：{vod_blurb}</p>
          </div>
        </Space>

        {this.state.detail && <Episode sources={this.state.sources}></Episode>}
      </div>
    );
  }
}

export default withRouter(Detail);
