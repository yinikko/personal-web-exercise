<template>
    <div class="product">
      <div class="g-header-container">
        <product-header></product-header>
      </div>
      <product-scroll ref='scroll'>
        <div class="item">
          <product-slider class="slider" ref='slider' @update='update'></product-slider>
          <product-details @update='update'></product-details>
        </div>
      </product-scroll>
      <div class="g-footer-container">
        <product-foot></product-foot>
      </div>
    </div>
</template>

<script>
  import productHeader from './header';
  import productScroll from 'base/scroll';
  import productSlider from './slider';
  import productDetails from './message';
  import productFoot from './foot';
  export default {
    name: 'Product',
    components: {
      productHeader,
      productScroll,
      productSlider,
      productDetails,
      productFoot
    },
    methods: {
      update() {
        this.$refs.scroll.update();
      }
    }
    // created() {
    //   console.log(this.$route.params.id);
    //   getProductDetails(this.$route.params.id).then(data => {
    //     this.details = data;
    //     console.log(this.details);
    //   });
    // }
  };
</script>

<style lang="scss" scoped>
 @import "~assets/scss/mixins";
 .product {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: $product-z-index;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
  .item {
    padding-top: 50px;
  }
</style>
