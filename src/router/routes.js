import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({
    // 路由类型： 路由分 history和bash
    history:createWebHistory(),
    // 路由表
    routes:[
        {
            path:"/",
            component: () => import("../pages/Index"),
        },
        {
            path:"/hello",
            component: () => import("../pages/HelloWorld"),
        },
        {
            path:"/test",
            component: () => import("../pages/Test")
        },
        {
            path:"/login",
            name:"Login",
            component: () => import("../pages/Login")
        },
        // 404
        {
            path: '/:pathMatch(.*)*',
            component: () => import("../pages/NotFound")
        }
    ]
})

export default router