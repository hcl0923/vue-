<template>
  <div>
    <h1>个人信息</h1><!--{{$route.params.id}}-->{{ id }}
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "UserProfile",
  //过滤器
  beforeRouteEnter: (to, from, next) => {
    console.log("进入路由之前");//加载数据
    next(vm => {
      vm.getData();
    });/*
    next()跳入下一个页面
    next("'/path')改变路由的跳c转方向，使其跳到另一个路由
    next(false)返回原来的页面
    next((vm)=>0)仅在 beforeRouteEnter中可用，vm是组件实例*/
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("离开路由之前");//加载数据
    next();
  },
  methods: {
    getData: function () {
      this.axios({
        method: 'get',
        url: "/static/mock/data.json"
      }).then(function (response) {
        console.log(response)
      });
    }
  }
}
</script>
<style scoped>
</style>
