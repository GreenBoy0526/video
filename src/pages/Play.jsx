import { Component } from 'react';
import http from '../utils/request'
import { Link,withRouter } from 'react-router-dom'
import qs from 'qs'
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Episode from "../components/Episode";
import VideoPlayers from "../components/VideoPlayers";

class Play extends Component {
    componentDidMount() {
        let { id} = qs.parse(this.props.location.search.slice(1))
        http.get(null,{params:{ac:'detail',ids:id}}).then(res => {
            let namelist = res.list[0].vod_play_from.split('$$$')
            let play_url_list = res.list[0].vod_play_url.split('$$$')
            let urls = []
            for (let i = 0; i < namelist.length; i++) {
                urls[i] = {
                    name: namelist[i],
                    urls: play_url_list[i].split('#')
                }
                for (let j = 0; j < urls[i].urls.length; j++) {
                    urls[i].urls[j] = {
                        name: urls[i].urls[j].split('$')[0],
                        url: urls[i].urls[j].split('$')[1]
                    }
                }
            }
            urls.reverse()
            console.log(urls);
            this.setState({
                detail: res.list[0],
                urls,
                id
            })
        })
    }
    toVod = (source, index) => {
        this.props.history.push(`/v?id=${this.state.id}&source=${source}&index=${index}`)
        location.reload()
    }
    state = {
        detail: {},
        urls: []
    }
    render() {
        let { vod_name} = this.state.detail
        let { source, index } = qs.parse(this.props.location.search.slice(1))
        index-=1
        let url = this.state.urls.find(function (element) {
            return element.name == source;
        })
        console.log(url)
        let now_vod_name=''
        if (url) {
            now_vod_name=url.urls[index].name
            document.title=`${vod_name+now_vod_name}-乐坏影视`
        }

        return (
            <div style={{ margin: '2rem auto', width: '80%' }}>
                <Breadcrumb>
                    <Breadcrumb.Item href="http://greenboy0526.gitee.io/greenboyvideos">
                        <HomeOutlined />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={"/s?wd="+vod_name}>搜索：{vod_name}</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={"/d?id="+this.state.id}>{vod_name}</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{now_vod_name}</Breadcrumb.Item>
                </Breadcrumb>
          
                <VideoPlayers source={source} url={url} index={index}></VideoPlayers>
                
                {
                    this.state.urls.length > 0 ?
                        <Episode urls={this.state.urls} onChooseEpisode={this.toVod} source={source} index={index}></Episode> :
                        <p></p>
                }

            </div>
        )
    }
}

export default withRouter(Play);