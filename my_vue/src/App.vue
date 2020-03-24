<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="g-footer-container">
      <CTabber></CTabber>
    </div>
  </div>
</template>

<script>
  import CTabber from 'components/tabber/index.vue';
  export default {
    name: 'App',
    components: {
      CTabber
    }
  };
</script>
