<template>
  <nav>
    <nav-item v-for="(item,key) in menu" :to="item.to" :key="key">
      {{item.name}}
    </nav-item>
  </nav>
</template>
<script>
export default {
  name: 'Menu',
  props:{
    menu:{
      type: Array,
      default:() => [],
    }
  },
  components:{
    NavItem: () => import('@/components/NavItem.vue')
  }
}

</script>
<style lang="scss">
nav{
  height: 100vh;
  width: 15vw;
  background: lightgray;
  padding: 1rem;
  box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2),
    0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
}
</style>
