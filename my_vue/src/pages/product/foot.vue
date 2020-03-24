<template>
    <div class="product-foot">
        <div class="foot-item">
          <i class="iconfont icon-shop"></i>
          <span>店铺</span>
        </div>
        <div class="foot-item">
          <i class="iconfont icon-service"></i>
          <span>客服</span>
        </div>
        <div class="foot-item">
          <i class="iconfont icon-collect"></i>
          <span>收藏</span>
        </div>
        <!-- <i class="iconfont icon-service"></i>
        <i class="iconfont icon-collect"></i> -->
        <span class="foot-sp foot-sp-one">加入购物车</span>
        <span class="foot-sp foot-sp-two">马上抢</span>
    </div>
</template>

<script>
  export default {
    name: 'productFoot'
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .product-foot {
    height: 50px;
    background: white;
    display: flex;
    .foot-item {
      width: 15%;
      display: flex;
      flex-direction: column;
      text-align: center;
      .iconfont {
        margin-top: 7px;
        text-align: center;
        font-size: 24px;
      }
    }
    .foot-sp {
      line-height: 50px;
      width: 27.5%;
      font-size: 14px;
      color: white;
      text-align: center;
      &.foot-sp-one {
        background: orange;
      }
      &.foot-sp-two {
        background: red;
      }
    }
  }
</style>
