<template>
  <personal-navbar class="personal-navbar">
    <p class="nav-text" slot="center">我的慕淘</p>
    <div class="icon" slot="right">
      <i class="iconfont icon-setting"></i>
      <i class="iconfont icon-msg"></i>
    </div>
  </personal-navbar>
</template>

<script>
  import personalNavbar from 'base/navbar';
  export default {
    name: 'personalHeader',
    components: {
      personalNavbar
    }
  };
</script>

<style lang="scss">
    @import '~assets/scss/mixins';
    .personal-navbar {
        background-color: $header-bgc;
        .nav-text {
            color: $icon-color-default;
            text-align: center;
            font-size: $icon-font-size-sm;
            padding-left: 61px;
        }
        .iconfont {
            font-size: $icon-font-size;
            color: $icon-color-default;
        }
    }
</style>
