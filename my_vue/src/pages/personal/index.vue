<template>
    <div class="g-container">
        <div class="personal-header">
          <personal-header></personal-header>
        </div>
        <scroll class="personal-scroll">
          <img class='personal-img' src="./personal.png">
        </scroll>
    </div>
</template>

<script>
  import personalHeader from './header';
  import scroll from 'base/scroll/';
  export default {
    name: 'personal',
    components: {
      personalHeader,
      scroll
    }
  };
</script>

<style lang="scss">
    .personal-scroll {
        width: 100%;
        // height: 100%;
        .personal-img {
            width: 100%;
            padding-bottom: 50px;
        }
    }
</style>
