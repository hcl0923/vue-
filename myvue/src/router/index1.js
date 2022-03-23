import vue from "vue"
import VueRouter from 'vue-router'
import Content from "../components/Content";
import Main from "../components/Main";
import kuang from "../components/kuang";
//安装路雨
vue.use(VueRouter);
//配置导出路由
export default new VueRouter({
  routes: [{
    //路由路径 @RequestMapping
    path: '/content',
    name: 'content',
    //跳转的组件
    component: Content
  },
    {
      path: '/main',
      name: 'main',
      //跳转的组件
      component: Main
    },
    {
      path: '/kuang',
      name: 'kuang',
      //跳转的组件
      component: kuang
    }
  ]
});
