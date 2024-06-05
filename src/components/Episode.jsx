import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Space, Button, Card } from 'antd';

class Episode extends Component {
    componentDidMount() {
        this.setState({
            key: this.props.source || this.props.urls[0].name,
            index:this.props.index||-1
        })
    }
    componentDidUpdate(nextProps, nextState){
        if (nextProps.history.location.search != nextProps.location.search) {
            this.setState({
                key: this.props.source || this.props.urls[0].name,
                index:this.props.index||-1
            })
        }
    }
    state = {
        key: '',
        index:-1
    }
    onTabChange = (key, type) => {
        this.setState({ [type]: key });
    }
    render() {
        const tabList = [];
        const contentList = {};
        for (let i = 0; i < this.props.urls.length; i++) {
            tabList[i] = {
                key: this.props.urls[i].name,
                tab: `播放${i + 1}`
            }
            contentList[tabList[i].key] = this.props.urls[i].urls
        }
        console.log(tabList,contentList,this.state.key);
        return (
            <Card
                style={{ width: '100%' }}
                tabList={tabList}
                activeTabKey={this.state.key}
                onTabChange={key => {
                    this.onTabChange(key, 'key');
                }}
            >
                <Space wrap>
                    {
                        this.state.key ? contentList[this.state.key].map((item, index) => <Button type={this.state.index==index?"primary":""} key={item.name} onClick={() => { this.props.onChooseEpisode(this.state.key, 1+index) }}>{item.name}</Button>) : '无数据'
                    }
                </Space>
            </Card>
        )
    }
}
// export default Episode
export default withRouter(Episode)