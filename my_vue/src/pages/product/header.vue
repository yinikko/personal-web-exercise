<template>
  <navbar class="product-navbar">
    <i class="iconfont icon-back" @click="backToHome" slot="left"></i>
    <div class="navbar-text" slot="center">商品详情</div>
    <i class="iconfont icon-cart" @click="ToCart" slot="right"></i>
  </navbar>
</template>

<script>
  import navbar from 'base/navbar';
  export default {
    name: 'productHeader',
    components: {
      navbar
    },
    methods: {
      backToHome() {
        this.$router.push('/home');
      },
      ToCart() {
        this.$router.push('/cart');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .product-navbar {
    background-color: $header-bgc;
    .navbar-text {
      text-align: center;
      color :$icon-color-default;
      font-size: $icon-font-size-sm;
    }
    .iconfont {
      color :$icon-color-default;
      font-size: $icon-font-size-sm;
    }
  }
</style>
