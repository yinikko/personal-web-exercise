<template>
  <div class="product-details">
    <loading v-if="msg.length"></loading>
    <div class="product-item">
      <div class="price-sales">
        <div class="price" v-if="msg.price && msg.price.transmitPrice.priceText">
          <span>￥</span>
          {{msg.price.transmitPrice.priceText}}
        </div>
        <div class="sales" v-if="msg.item && msg.item.vagueSellCount">
          <div class="sales-test">{{msg.item.vagueSellCount}}已售</div>
        </div>
      </div>
      <div class="product-title">
        <div class="product-name" v-if="msg.item && msg.item.title">{{msg.item.title}}</div>
        <title-nav class="others">
          <div class="shipping" v-if="msg.delivery && msg.delivery.postage" slot="left">{{msg.delivery.postage}}</div>
          <div class="mouth-sales" v-if="msg.item && msg.item.sellCount" slot="center">月销量{{msg.item.sellCount}}件</div>
          <div class="address" v-if="msg.delivery && msg.delivery.from" slot="right">{{msg.delivery.from}}</div>
        </title-nav>
      </div>
      <div class="evaluation">
        <div class="eva-title" v-if="msg2.rate && msg2.rate.totalCount">商品评价 ({{msg2.rate.totalCount}})</div>
        <ul class="keyword" v-if="msg2.rate && msg2.rate.keywords">
          <li v-for="(item, index) in msg2.rate.keywords" :key="index">{{item.word}}({{item.count}})</li>
        </ul>
        <div class="buyer" v-if="msg2.rate">
          <div class="buyer-name">
            <img :src="msg2.rate.rateList[0].headPic"/>
            {{msg2.rate.rateList[0].userName}}
          </div>
          <div class="eva-container">{{msg2.rate.rateList[0].content}}</div>
          <div class="eva-others">
            <div class="eva-time" v-if="msg2.rate.rateList[0].dateTime">{{msg2.rate.rateList[0].dateTime}}</div>
            <div class="product-category" v-if="msg2.rate.rateList[0].skuInfo">{{msg2.rate.rateList[0].skuInfo}}</div>
          </div>
        </div>
      </div>
      <div class="seller" v-if="seller">
        <div class="seller-title">
          <img class="seller-shopIcon" :src="seller.shopIcon">
          <div class="seller-name">
            <p>{{seller.shopName}}</p>
            <img class="seller-brandIcon" :src="seller.brandIcon">
          </div>
        </div>
        <div v-if="seller.evaluates" class="store-evaluation">
          <span class="store-span store-span-one">{{seller.evaluates[0].title}} {{seller.evaluates[0].score}}</span>
          <span class="store-span store-span-two">{{seller.evaluates[1].title}} {{seller.evaluates[1].score}}</span>
          <span class="store-span store-span-three">{{seller.evaluates[2].title}} {{seller.evaluates[2].score}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import loading from 'base/loading/';
  import { getProductDetails } from 'api/product.js';
  import titleNav from 'base/navbar/';
  export default {
    name: 'productMessage',
    data() {
      return {
        msg: [],
        msg2: [],
        seller: []
      };
    },
    components: {
      loading,
      titleNav
    },
    methods: {
      getSliders() {
        return getProductDetails(this.$route.params.id).then(res => {
          console.log(res);
          if (res) {
            setTimeout(() => {
              this.msg2 = res.data;
              console.log(res.data.seller);
              this.msg = JSON.parse(res.data.apiStack[0].value);
              this.seller = res.data.seller;
              // 触发父组件中更新事件
              this.$emit('update');
            }, 1000);
          }
        });
      }
    },
    created() {
      this.getSliders();
    }
  };

</script>
<style lang="scss" scoped>
@import "~assets/scss/mixins";

.product-details {
  width: 100%;
  padding-bottom: 50px;
    .price-sales {
    background: linear-gradient(to top right, #ef338e, #ef3649);
    color: #fff;

    .price {
      margin-left: 8px;
      line-height: 50px;
      display: inline-block;
      font-size: 20px;

      span {
        font-size: 14px;
      }
    }

    .sales {
      background: rgba($color: #000000, $alpha: 0.3);
      border-radius: 4px;
      display: inline-block;
      font-size: 12px;
      float: right;
      padding: 0 10px;
      margin-right: 8px;
      margin-top: 10px;
      line-height: 30px;
      text-align: center;
    }
  }

  .product-name {
    color: #000;
    background: white;
    font-size: 12px;
    padding: 10px;
  }

  .others {
    background: white;
    padding-top: 20px;
    padding-bottom: 15px;
    height: 30px;
    color: $icon-color;
    text-align: center;
    margin-bottom: 10px;
  }

  .evaluation {
    padding-top: 10px;
    padding-bottom: 18px;
    background: white;
    .eva-title {
      margin-left: 10px;
      margin-bottom: 10px;
      color: grey;
    }
    .keyword {
      color: grey;
      &::after {
        content: '';
        display: block;
        clear: both;
      }
      li {
        border: 1px #ffeeee solid;
        border-radius: 8px;
        background: #ffeeee;
        padding: 7px;
        float: left;
        margin: 10px 0 0 10px;
      }
    }
    .buyer {
      margin-top: 20px;
      margin-left: 10px;
      .buyer-name {
        height: 30px;
        line-height: 30px;
        margin-top: 20px;
        img {
          border-radius: 50%;
          height: 30px;
        }
      }
      .eva-container {
        color: black;
        margin-top: 10px;
        line-height: 1.4em;
      }
      .eva-others {
        margin-top: 10px;
        color: grey;
        .eva-time {
          display: inline-block;
        }
        .product-category {
          display: inline-block;
        }
      }
    }
  }
  .seller {
    margin-top: 10px;
    background: white;
    .seller-title {
      padding-top: 10px;
      padding-bottom: 10px;
      margin-left: 10px;
      &::after{
        content: '';
        display: block;
        clear: both;
      }
      .seller-shopIcon {
        border: 1px solid #cbcbcb;
        float: left;
        height: 60px;
      }
      .seller-name {
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        font-size: 18px;
        color: black;
        .seller-brandIcon {
          height: 14px;
          margin-top: 5px;
        }
      }
    }
    .store-evaluation {
      margin-top: 20px;
      padding-bottom:20px;
      color: grey;
      text-align: center;
      .store-span {
        margin: 0 30px;
      }
    }
    // <div v-if="seller.evaluates" class="store-evaluation">
    //       <span class="store-span-one">{{seller.evaluates[0].title}} {{seller.evaluates[0].score}}</span>
    //       <span class="store-span-two">{{seller.evaluates[1].title}} {{seller.evaluates[1].score}}</span>
    //       <span class="store-span-three">{{seller.evaluates[2].title}} {{seller.evaluates[2].score}}</span>
    //     </div>
  }
}
</style>
