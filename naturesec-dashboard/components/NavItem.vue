<template>
  <nuxt-link class="links" :to="to">
    <slot>

    </slot>

  </nuxt-link>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    to : {
      type: String,
      default: ""
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.links{
  padding: 10px;
  margin-bottom: 10px;
  color: $link-color;
}
.nuxt-link-active{
  color: $nuxt-link-active;
}

</style>
