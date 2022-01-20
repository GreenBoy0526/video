
<template>
    <a-breadcrumb>
        <a-breadcrumb-item>
            <router-link to="/">排骨汤大人的视频小站</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>VIP解析（仅供学习）</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="box">
        <div id="kuangjia">
            <div id="readme" v-if="showreadme">
                <h2>使用说明</h2>
                <p>输入影片名或粘贴视频地址后点击任意接口即可播放，如果不行就换一个接口</p>
                <p>本页面仅用于学习研究</p>
                <p>
                    更多内容请关注微信公众号:
                    <span id="GreenBoy">GreenBoy</span>
                </p>
                <img src="/img/公众号二维码.jpg" />
            </div>
            <iframe :src="iframesrc" width="100%" height="400px" allowfullscreen="true" v-else></iframe>
        </div>

        <a-input v-model:value="value" placeholder="播放地址或影片名" />
        <div id="button">
            <a-button v-for="item in apis" @click="play(item)">{{ item.name }}</a-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

let apis = [
    {
        name: 'm1907',
        url: "https://z1.m1907.cn/?jx="
    },
    {
        name: 'ok',
        url: "https://api.okjx.cc:3389/jx.php?url="
    }
]
let showreadme = ref(true)
let iframesrc = ref('')
let value=ref('')
function play(item: any) {
    showreadme.value=false
    iframesrc.value = item.url+value.value
    
}
</script>
<style lang="scss">
.box{
    margin: 100px auto;
	text-align: center;
	width: 59rem; 
}
</style>