
<template>
    <a-breadcrumb>
        <a-breadcrumb-item>
            <router-link to="/">排骨汤大人的视频小站</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>网红之路</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="box">
        <video style="width: 30rem;height: 30rem" controls autoplay ref="video">
            <source :src="videosrc" type="video/mp4" />
        </video>
        <hr />
        <a-button v-for="item in videos" @click="play(item)">{{ item.name }}</a-button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

let videos = [
    {
        name: '五行',
        url: "/video/五行.mp4"
    },
    {
        name: '进宫',
        url: "/video/进宫.mp4"
    },
    {
        name: '黑土白云',
        url: "/video/黑土白云.mp4"
    },
    {
        name: '公主病',
        url: "/video/公主病.mp4"
    },
    {
        name: '公主病（重口）',
        url: "/video/公主病（重口）.mp4"
    },
]

let videosrc = ref('/video/五行.mp4')

const video = ref<HTMLVideoElement | null>(null);
function play(item: any) {
    if (video.value) {
        video.value.src = item.url
    }
}
</script>
<style lang="less">
</style>