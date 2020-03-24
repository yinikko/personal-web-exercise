<template>
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-item" v-for="(item, index) in navs" :key="index">
                <a :href="item.linkUrl" class="nav-link">
                    <img :src="item.picUrl" class="nav-img">
                    <span>{{item.text}}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
  import {navItems} from './config';
  export default {
    name: 'homeNav',
    created() {
      this.navs = navItems;
    },
    components: {
      navItems
    }
  };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/mixins';
    .nav{
        background: white;
        padding-top: 15px;
        width: 100%;
        &-list{
            display: flex;
            flex-wrap:wrap;
            width:100%;
        }
        &-item{
            width:20%;
            margin-bottom: 15px;
        }
        &-link {
            @include flex-center(column);
        }
        &-img{
            width:60%;
            margin-bottom: 5px;
        }
    }
</style>
