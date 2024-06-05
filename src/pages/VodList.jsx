import { Component } from "react";
import http from "../utils/request";
import { withRouter } from "react-router-dom";
import qs from "qs";
import VodCard from "../components/VodCard";
import { Empty, Spin, Result } from "antd";

class VodList extends Component {
  componentDidMount() {
    this.getList();
  }
  componentDidUpdate(data) {
    // console.log(data.history.location.search, data.location.search)
    if (data.history.location.search != data.location.search) {
      this.getList();
    }
  }
  getList = () => {
    let wd = qs.parse(this.props.location.search.slice(1)).wd;
    document.title = `搜索：${wd}-乐坏影视`;
    http
      .get(null, { params: { ac: "list", wd } })
      .then((res) => {
        console.log(res);
        if (res.code == 1 && res.total > 0) {
          this.setState({
            list: res.list,
          });
        } else {
          this.setState({
            list: [],
            msg: <Empty description="没有搜到数据，换个关键词试试" />,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          list: [],
          msg: <Result status="error" title="网络错误"></Result>,
        });
      });
  };
  state = {
    list: [],
    msg: <Spin tip="正在搜索……" fullscreen></Spin>,
  };

  render() {
    if (this.state.list.length > 0) {
      return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.list.map((Voditem) => {
            return <VodCard data={Voditem} key={Voditem.vod_id} />;
          })}
        </div>
      );
    } else {
      return <div style={{ textAlign: "center" }}>{this.state.msg}</div>;
    }
  }
}

export default withRouter(VodList);
