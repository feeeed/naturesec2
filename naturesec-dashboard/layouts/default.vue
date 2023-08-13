<template>
  <div class="app">
    <my-menu :menu="menu"/>
    <div class="content">
      <main>
        <Nuxt/>
      </main>
      <my-footer />


    </div>
  </div>
</template>
<script>
import menu from "~/layouts/setup";
export default{
  name: 'DefaultLayout',
  data:() => ({
    menu
  }),
  components:{
   myFooter: () => import('@/components/Layouts/footer.vue'),
   myMenu: () => import('@/components/Layouts/Menu.vue')
  }
}
</script>
<style lang="scss">
@import '@/assets/styles/global.scss';
.app {
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: row;
}

.content{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85vw;
}
main {
  height: 95%;
  background: $main-bg;
}
</style>
