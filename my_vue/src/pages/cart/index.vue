<template>
    <div class="g-container">
        <div class="cart-header">
            <cart-header></cart-header>
        </div>
        <scroll class="cart-scroll">
            <img class='cart-img' src="./cart.png">
        </scroll>
    </div>
</template>

<script>
  import cartHeader from './header';
  import scroll from 'base/scroll/';
  export default {
    name: 'cart',
    components: {
      cartHeader,
      scroll
    }
  };
</script>

<style lang="scss">
    .cart-scroll {
        width: 100%;
        // height: 100%;
        .cart-img {
            width: 100%;
            padding-bottom: 50px;
        }
    }
</style>
