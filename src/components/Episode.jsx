import { useState } from "react";
import { Space, Button, Card } from "antd";

import qs from "qs";
import { useLocation, useHistory } from "react-router-dom";

const Episodes = ({ sources }) => {
  let location = useLocation();
  let { id, source, index } = qs.parse(location.search.slice(1));

  let history = useHistory();
  const toVod = (source, index) => {
    history.push(`/v?id=${id}&source=${source}&index=${index}`);
    window.location.reload();
  };

  let [key, setKey] = useState(source || sources[0].name);

  const tabList = [];
  const contentList = {};
  sources.forEach((item) => {
    tabList.push({
      key: item.name,
      tab: item.name,
    });
    contentList[item.name] = item.urls;
  });

  return (
    <Card
      style={{ width: "100%" }}
      tabList={tabList}
      activeTabKey={key}
      onTabChange={(key) => {
        setKey(key);
      }}
    >
      <Space wrap>
        {sources
          ? contentList[key].map((item, i) => (
              <Button
                type={index - 1 == i ? "primary" : ""}
                key={item.name}
                onClick={() => {
                  toVod(key, 1 + i);
                }}
              >
                {item.name}
              </Button>
            ))
          : "无数据"}
      </Space>
    </Card>
  );
};
export default Episodes;
