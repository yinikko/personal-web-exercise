<template>
    <div class="navbar">
        <div class="navbar-left">
            <slot name='left'></slot>
        </div>
        <div class="navbar-center" v-if="$slots.center">
            <slot name='center'></slot>
        </div>
        <div class="navbar-right" v-if="$slots.right">
            <slot name='right'></slot>
        </div>
        <h1 class="navbar-title" v-if="title">
            <span class="navbar-title-span" v-text="title"></span>
        </h1>
    </div>
</template>

<script>
  export default {
    name: 'navbar',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss">
    @import '~assets/scss/mixins';
    .navbar{
        @include flex-between();
        width: 100%;
        height: $navbar-height;
        &-left{
            margin-left:10px;
        };
        &-center{
            flex:1;
            margin:0 10px;
        };
        &-right{
            margin-right:10px;
        }
        &-title{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 20%;
            right: 20%;
            @include flex-center();
            text-align: center;
            line-height:1.5;
            &-span{
                display:inline-block;
                width:100%;
                font-size:18px;
                @include ellipsis();
            }
        }
    }
</style>
