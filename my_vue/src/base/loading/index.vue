<template>
    <div class="loading-container">
        <span class="loading-img" v-if="indicator==='on'">
            <slot><img src=".\loading.gif"></slot>
        </span>
        <span class="loading-text" v-if="loadingText">{{loadingText}}</span>
    </div>
</template>

<script>
  export default {
    name: 'loading',
    props: {
      indicator: {
        type: String,
        default: 'on'
      },
      text: {
        type: String,
        default: '加载中...'
      }
    },
    data() {
      return {
        loadingText: this.text
      };
    },
    watch: {
      text(text) {
        this.loadingText = text;
      }
    },
    methods: {
      setText(text) {
        this.loadingText = text;
      }
    }
  };
</script>

<style lang="scss">
    @import '~assets/scss/mixins';
    .loading-container{
        width: 100%;
        height: 100%;
        @include flex-center(row);
    }
    .loading-img ~ .loading-text{
            display: inline-block;
            margin-left: 8px;
        }
</style>
