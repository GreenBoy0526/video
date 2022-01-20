import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import JieXi from '@/views/JieXi/index.vue'
import MineVideo from '@/views/MineVideo/index.vue'

const history = createWebHashHistory()

const routes = [{
    path: '/',
    name: 'index',
    component: Home
},
{
    path: '/jiexi',
    name: 'jiexi',
    component: JieXi
},
{
    path:'/video',
    name:'video',
    component:MineVideo
}]
const router = createRouter({
    history,
    routes
})

export default router