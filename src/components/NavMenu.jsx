import { useEffect, useState } from "react";
import { Menu, Affix, Input } from "antd";
import { HomeOutlined, GithubOutlined } from "@ant-design/icons";
import { useHistory,useLocation} from "react-router-dom";
import qs from "qs";
import isMobile from "../utils/isMobile";

const { Search } = Input;



let NavMenu = (props) => {
  let history = useHistory();
  let location = useLocation();

  let [current, setCurrent] = useState("mail");

  let handleClick = (e) => {
    setCurrent(e.key);
  };
  let onSearch = (value) => {
    history.push(`/s?wd=${value}`);
  };

  let [defaultSearch, setDefaultSearch] = useState("");
  useEffect(() => {
    let wd = qs.parse(location.search.slice(1)).wd;
    setDefaultSearch(wd);
  }, [location.search]);

  if (isMobile) {
    return (
      <Affix offsetTop={0}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: 10,
            paddingBottom: 10,
            boxShadow: "0 0 5px #ccc",
            backgroundColor: "white",
          }}
        >
          <a
            href="http://greenboy0526.gitee.io/greenboyvideos"
            style={{ color: "black" }}
          >
            <HomeOutlined />
          </a>
          <Search
            placeholder="请输入影片或演员名"
            allowClear
            onSearch={onSearch}
            style={{ width: "80%" }}
          />
          <a
            href="https://gitee.com/GreenBoy0526/GreenBoyVideos"
            style={{ color: "black" }}
          >
            <GithubOutlined />
          </a>
        </div>
      </Affix>
    );
  } else {
    const items = [
      {
        key: "home",
        icon: <HomeOutlined />,
        label: (
         <span onClick={()=>history.push('/')}>首页</span>
        ),
      },
      {
        key: "search",
        label: (
          <Search
            placeholder="请输入影片或演员名"
            style={{ marginTop: 8 }}
            onSearch={onSearch}
            defaultValue={defaultSearch}
            key={defaultSearch}
          />
        ),
      },
      {
        key: "git",
        label: (
          <a href="https://gitee.com/GreenBoy0526/GreenBoyVideos">
            <img
              src="https://gitee.com/GreenBoy0526/GreenBoyVideos/badge/star.svg?theme=white"
              alt="star"
            ></img>
          </a>
        ),
      },
    ];
    return (
      <Affix offsetTop={0}>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        ></Menu>
      </Affix>
    );
  }
};
export default NavMenu
