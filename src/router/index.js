

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let routes = [
        {
            path: "/",
            name: 'home',
            component: () =>
                import( "../components/Home")
        },
        {
            path: "/HelloWorld",
            name: 'HelloWorld',
            component: () =>
                import( "../components/HelloWorld")
        },{
            path: "/async",
            name: 'async',
            component: () =>
                import( "../components/async")
        },{
            path: "/xtrem",
            name: 'xtrem',
            component: () =>
                import( "../components/index-xterm")
        },{
            path: "/index-echarts",
            name: 'index-echarts',
            component: () =>
                import( "../components/index-echarts")
        },{
            path: "/routerDom",
            name: 'routerDom',
            component: () =>
                import( "../components/routerDom")
        },

        
    ]
    const router = new Router({
        routes:routes
    })

    router.beforeEach((to, from, next) => {
        // 做些什么，通常权限控制就在这里做哦
    
        // 必须写next()哦，不然你的页面就会白白的，而且不报错，俗称"代码下毒"
        next();
    });
    export default  router