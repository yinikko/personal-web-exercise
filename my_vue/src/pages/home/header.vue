<template>
  <navbar class="header" v-show="visible">
    <i class="iconfont icon-scan" slot='left'></i>
    <me-searchbox
      placeholder='提示'
      slot="center"
      fake
      @query='getQuery'
      @click.native="goToSearch"
    ></me-searchbox>
    <i class="iconfont icon-msg" slot="right"></i>
  </navbar>
</template>

<script>
  import navbar from 'base/navbar/';
  import MeSearchbox from 'base/searchbox';
  export default {
    name: 'homeHeader',
    components: {
      navbar,
      MeSearchbox
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      getQuery(query) {
        console.log(query);
      },
      goToSearch() {
        this.$router.push('/search');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .header{
    &.navbar{
      background-color:transparent;
      transition: background-color 0.5s;
    }
    .iconfont{
      font-size:$icon-font-size;
      color:$icon-color-default;
    }
    &.header-transition {
      background-color: $header-bgc-translucent;
    }
  }
</style>
