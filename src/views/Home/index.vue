
<template>
<a-breadcrumb>
    <a-breadcrumb-item><a href="http://greenboy0526.gitee.io/site-navigation">网址导航</a></a-breadcrumb-item>
    <a-breadcrumb-item>排骨汤大人的视频小站</a-breadcrumb-item>
  </a-breadcrumb>
    <div class="menu">
        <div v-for="item in menu">
            <a-button type="primary" @click="to(item)">{{ item.name }}</a-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()
let menu = [
    {
        name: 'VIP解析（仅供学习）',
        route: 'jiexi'
    },
    {
        name: '我的视频',
        route: 'video'
    },
]
function to(item: any) {
    if (item.name=='我的视频') {
        // if (!canto()) return
    }
    router.push(item.route)
}
function canto() {
    var name = prompt("找我问暗号，输入即可跳转");
    if (name == "GreenBoy") {
        return true;
    }
    else {
        alert("熟人直接找我问就可以");
        return false;
    }
}
</script>
<style lang="scss">
.menu {
    margin-top: 200px;
    text-align: center;
    & > div {
        margin-top: 10px;
    }
}
</style>