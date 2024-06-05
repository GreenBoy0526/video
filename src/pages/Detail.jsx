import { Component } from 'react';
import http from '../utils/request'
import { withRouter } from 'react-router-dom'
import qs from 'qs'
import { Tag, Space, Button, Card } from 'antd';
import Episode from "../components/Episode";

class Detail extends Component {
    componentDidMount() {
        let id = qs.parse(this.props.location.search.slice(1)).id
        http.get(null,{params:{ac:'detail',ids:id}}).then(res => {
            document.title=`${res.list[0].vod_name}-乐坏影视`
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
    toVod=(source,index)=>{
        console.log(source)
        this.props.history.push(`/v?id=${this.state.id}&source=${source}&index=${index}`)
    }
    state = {
        detail: {},
        urls: []
    }
    render() {
        console.log('渲染');
        let { vod_name, type_name, vod_remarks, vod_time, vod_director, vod_actor, vod_area, vod_pic, vod_blurb } = this.state.detail
        return (
            <div style={{ margin: '2rem auto', width: '80%' }}>
                <Space align="center" wrap>
                    <div style={{ width: 200, height: 200}}>
                        <img src={vod_pic} alt="" height='100%' />
                    </div>
                    <div style={{maxWidth:1000}}>
                        <p>{vod_name} <Tag>{vod_remarks}</Tag></p>
                        <p>导演：{vod_director || "不详"}</p>
                        <p>主演：{vod_actor || "不详"}</p>
                        <p>类型：{type_name} 地区：{vod_area}</p>
                        <p>更新：{vod_time}</p>
                        <p>简介：{vod_blurb}</p>
                    </div>
                </Space>


                {
                    this.state.urls.length > 0 ? <Episode urls={this.state.urls} onChooseEpisode={this.toVod}></Episode> : <p></p>
                }

            </div>
        )
    }
}

export default withRouter(Detail);