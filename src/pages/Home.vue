<template>
  <transition appear name="fade">
  <div>
    <navBar></navBar>
    <div
      class="hero"
      :style="{ 'background-image': 'url(' + hero + ')' }"
    >
    </div>
    <hello></hello>
    </div>
  </transition>
</template>

<script>
// eslint-disable-next-line import/no-webpack-loader-syntax
// import Pace from 'imports-loader?define=>false!pace-progress';

import Hello from '@/components/Hello';
import NavBar from '@/components/NavBar';
// import images from '../assets/images';

export default {
  name: 'home-page',
  components: {
    Hello,
    NavBar,
  },
  extends: {
    data() {
      return {
        hero: 'static/images/home/hero.png',
        logo: 'static/images/logo.png',
      };
    },
  },
};
</script>

<style lang="sass">
//Bg
._bcg-cover
  background-size: cover
  background-repeat: no-repeat
  background-position: center center
._bcg-contain
  background-size: contain
  background-repeat: no-repeat
  background-position: center center

.hidden
  display: none
.show
  display: block
.animation
  width: 100px
  margin: 0 auto
  position: fixed
  left: 0
  right: 0
  top: 45%
.hero
  height: 580px
  width: 100%
  @extend ._bcg-cover
  background-attachment: fixed
</style>
