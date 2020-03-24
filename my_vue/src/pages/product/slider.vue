<template>
  <div class="swiper-wrapper">
    <loading class="loading-container" v-if="!sliders.length"></loading>
    <slider
    :data='sliders'
    :direction='direction'
    :loop='loop'
    :interval='interval'
    :pagination='pagination'
    v-else
    >
      <swiper-slide
        v-for="(item, index) in sliders"
        :key="index">
        <img :src='item' class="slider-img" @load="$emit('update')"/>
      </swiper-slide>
    </slider>
  </div>
</template>

<script>
  import slider from 'base/slider/';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import {getProductDetails} from 'api/product.js';
  import loading from 'base/loading/';

  export default {
    name: 'productSlider',
    components: {
      slider,
      swiperSlide,
      getProductDetails,
      loading
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: []
      };
    },
    methods: {
      getSliders() {
        return getProductDetails(this.$route.params.id).then(res => {
          this.sliders = res.data.item.images;
        });
      },
      update() {
        return this.getSliders();
      }
    },
    created() {
      this.getSliders();
    }
  };
</script>

<style lang="scss"  scoped>
  .swiper-wrapper {
    height: 100%;
  }

  .slider-img{
    width: 100%;
    height:100%;
  }

  .loading-container{
    height: 414px;
  }
</style>
