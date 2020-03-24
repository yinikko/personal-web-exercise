<template>
  <navbar class="header">
    <me-searchbox
      placeholder='提示'
      slot='center'
      fake
      @query='getQuery'
      @click.native="goToSearch"
    ></me-searchbox>
    <i class="iconfont icon-msg" slot="right"></i>
  </navbar>
</template>
<script>
  import navbar from 'base/navbar';
  import MeSearchbox from 'base/searchbox';
  export default {
    name: 'CategoryHeader',
    components: {
      navbar,
      MeSearchbox
    },
    methods: {
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
  @import "~assets/scss/mixins";

  .header {
    &.navbar {
      background-color: $header-bgc-translucent;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
