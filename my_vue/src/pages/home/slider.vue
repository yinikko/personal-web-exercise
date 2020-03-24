<template>
  <div class="swiper-wrapper">
    <loading v-if="!sliders.length"></loading>
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
        <a :href='item.linkUrl' class="slider-link">
          <img :src='item.picUrl' class="slider-img"/>
        </a>
      </swiper-slide>
    </slider>
  </div>
</template>

<script>
  import slider from 'base/slider/';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import {getHomeSlider} from 'api/home.js';
  import loading from 'base/loading/';

  export default {
    name: 'homeSlider',
    components: {
      slider,
      swiperSlide,
      getHomeSlider,
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
        return getHomeSlider().then(data => {
          this.sliders = data;
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

<style lang="scss" scoped>
  .swiper-wrapper {
    height: 183px;
  }

  .slider-link{
    display: block;
  }

  .slider-link,
  .slider-img{
    width: 100%;
    height:100%;
  }
</style>
