<template>
    <cart-navbar class="cart-navbar">
        <p class="nav-text" slot="center">购物车</p>
        <i class="iconfont icon-msg" slot="right"></i>
    </cart-navbar>
</template>

<script>
  import cartNavbar from 'base/navbar';
  export default {
    name: 'cartHeader',
    components: {
      cartNavbar
    }
  };
</script>

<style lang="scss">
    @import '~assets/scss/mixins';
    .cart-navbar {
        background-color: #fff;
        .nav-text {
            text-align: center;
            font-size: $icon-font-size-sm;
        }
        .iconfont {
            font-size: $icon-font-size;
            color: $icon-color;
        }
    }
</style>
