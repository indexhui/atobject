<template>
  <div
    class="bg"
    :style="{ 'background-image': 'url(' + bg + ')' }"
  >
    <div class="footer">
      <div class="container">
        <md-layout md-gutter>
          <md-layout md-flex="20">
            <router-link to="/" class="logo">
              <img :src="logo">
            </router-link>
          </md-layout>
          <md-layout md-flex="30">
            <div>
              <img :src="iconMail" class='icon'>
              atobject@gmail.com
            </div>
            <div>
              <img :src="iconPhone" class='icon'>
              02-2301-7282
            </div>
            <div>
              <img :src="iconPin" class='icon'>
              台北市和平西路二段34-1號
            </div>
          </md-layout>
          <md-layout md-flex="50">
           <div
            class="map"
            :style="{ 'background-image': 'url(' + map + ')' }"
            >
           </div>
          </md-layout>
        </md-layout>
        <div class="rights">© Atojbect 2017. All rights reserved.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      logo: 'static/images/logo.png',
      map: 'static/images/map.png',
      bg: 'static/images/home/bg.png',
      iconPin: 'static/images/footer/icon_pin.png',
      iconPhone: 'static/images/footer/icon_phone.png',
      iconMail: 'static/images/footer/icon_mail.png',
    };
  },
};
</script>

<style scoped lang="sass">
@import '../sass/settings'
// @import url(//fonts.googleapis.com/earlyaccess/cwtexkai.css)
@import url(//fonts.googleapis.com/earlyaccess/cwtexfangsong.css)
.footer
  max-width: 980px
  margin: 30px auto
.bg
  padding: 24px 0
  background-repeat: repeat
.container
  margin: 0 24px
a
  color: #000
.logo
  img
    width: 100px
.icon
  width: 40px
  height: 40px
.map
  width: 100%
  @extend ._bcg-cover
  height: 200px
.rights
  font-size: 0.6em
  color: #9D9393
  margin-top: 2em
</style>
