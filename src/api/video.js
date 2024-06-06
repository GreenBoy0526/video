import http from "../utils/request";

const sourceList = (detail) => {
  let sourceNameList = detail.vod_play_from.split("$$$");
  let play_url_list = detail.vod_play_url.split("$$$");
  return sourceNameList.map((name, i) => {
    return {
      name,
      urls: play_url_list[i].split("#").map((item) => {
        let [name, url] = item.split("$");
        return { name, url };
      }),
    };
  });
};
export const getVideoInfo = (id) => {
  return http.get(null, { params: { ac: "detail", ids: id } }).then((res) => {
    let detail = res.list[0];
    detail.vod_play_url = sourceList(detail);
    return detail;
  });
};
