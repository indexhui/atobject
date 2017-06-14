<template>
  <div class="hello">
  <router-link to="/" class="logo">
    <img :src="logo">
  </router-link>
  <nav>
    <router-link to="course">冶器課程</router-link>
    <a href="">冶器見學</a>
    <a href="">工藝家們</a>
    <a href="">關於冶器</a>
    <a href="">粉絲專頁</a>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      logo: 'static/images/logo.png',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<style scoped lang="sass">
@import '../sass/settings'
// @import url(//fonts.googleapis.com/earlyaccess/cwtexkai.css)
@import url(//fonts.googleapis.com/earlyaccess/cwtexfangsong.css)
.test
  color: red
a
  color: #000
.logo
  img
    width: 100px
nav
  margin: 20px 0
  a
    margin: 0 10px
    padding: 5px 5px
    font-size: 1.4em
    color: #272727
    font-family: 'cwTeXFangSong', serif
    font-weight: 300
</style>
