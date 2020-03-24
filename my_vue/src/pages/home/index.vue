<template>
    <div class="home">
        <div class="g-header-container">
          <Header ref="header" :class="{'header-transition': isHeaderTransition}"></Header>
        </div>
        <scroll
        :data='recommends'
        pullDown
        pullUp
        @pull-down='pullToRefresh'
        @pull-up='pullToLoadMore'
        @scroll-end='scrollEnd'
        @scroll="scroll"
        @pull-down-transition-end='pullDownTransitionEnd'
        ref="scroll">
          <home-slider ref='slider'></home-slider>
          <homeNav></homeNav>
          <home-recommend @loaded='getRecommends' ref='recommend'></home-recommend>
        </scroll>
        <div class="g-backtop-container">
          <me-backtop :visible='isBacktopVisible' @backtop='backToTop'></me-backtop>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  import Header from './header';
  import homeSlider from './slider';
  import scroll from 'base/scroll/';
  import homeNav from './nav';
  import homeRecommend from './recommend';
  import MeBacktop from 'base/backtop/';
  import {HEADER_TRANSITION_HEIGHT} from './config';
  export default {
    name: 'home',
    components: {
      Header,
      homeSlider,
      scroll,
      homeNav,
      homeRecommend,
      MeBacktop,
      HEADER_TRANSITION_HEIGHT
    },
    data() {
      return {
        recommends: [],
        isBacktopVisible: false,
        isHeaderTransition: false
      };
    },
    methods: {
      updateScroll() {
      },
      getRecommends(recommends) {
        this.recommends = recommends;
      },
      pullToRefresh(end) {
        this.$refs.slider.update().then(end);
        // setTimeout(() => {
        //   console.log('xiala');
        //   end();
        // }, 1000);
      },
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },
      scrollEnd(translate, scroll, pulling) {
        if (!pulling) {
          this.changeHeaderStatus(translate);
        }
        this.isBacktopVisible = translate < 0 && -translate > scroll.height;
      },
      pullToLoadMore(end) {
        this.$refs.recommend.update().then(end).catch(err => {
          if (err) {
            console.log(err);
          }
          end();
        });
      },
      pullDownTransitionEnd() {
        this.$refs.header.show();
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      },
      changeHeaderStatus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return;
        }
        this.$refs.header.show();
        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      }
    }
  };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .home {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: $bgc-theme;
    }
</style>
