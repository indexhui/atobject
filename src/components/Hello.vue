<template>
  <div class="hello">
    <md-layout md-hide-small-and-up class="container">
      <md-layout
        md-flex="60"
        class="hello_m hello_l"
        :style="{ 'background-image': 'url(' + hello2 + ')' }"
      >
      </md-layout>
      <md-layout
        class="hello_m hello_r"
        :style="{ 'background-image': 'url(' + hello3 + ')' }"
      >
      </md-layout>
    </md-layout>
    <md-layout md-gutter class="container">
      <md-layout md-flex="25"  md-column md-gutter md-hide-medium>
        <md-layout
          md-flex="60"
          class="hello2"
          :style="{ 'background-image': 'url(' + hello2 + ')' }"
        >
        </md-layout>
        <md-layout
          class="hello2 hello3"
          :style="{ 'background-image': 'url(' + hello3 + ')' }"
        >
        </md-layout>
      </md-layout>
      <md-layout
        md-flex-xsmall="100"
        class="hello1"
        :style="{ 'background-image': 'url(' + hello1 + ')' }"
      >
      <div class="title">冶器<br/>物件</div>
      <div class="discription">希望能傳遞當代金工創作面向與工藝創作的人文思維</div>
      </md-layout>

    </md-layout>
  </div>
</template>

<script>
// import images from 'static/images';

export default {
  name: 'hello',
  data() {
    return {
      hello1: 'static/images/home/hello_1.png',
      hello2: 'static/images/home/hello_2.png',
      hello3: 'static/images/home/hello_3.png',
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
//Bg
._bcg-cover
  background-size: cover
  background-repeat: no-repeat
  background-position: center center
._bcg-contain
  background-size: contain
  background-repeat: no-repeat
  background-position: center center

.hello
  max-width: 980px
  margin: 50px auto
.container
  margin: 0 24px
.hello1
  @extend ._bcg-cover
  height: 400px
  color: #fff
  position: relative
.hello2
  @extend ._bcg-cover
  margin-right: 12px
.hello3
  @extend ._bcg-cover
  margin-top: 12px
.hello_m
   @extend ._bcg-cover
   height: 150px
   margin-bottom: 12px
   width: 100%
.hello_l
  margin-right: 12px
.title
  position: absolute
  left: 50px
  bottom: 50px
.discription
  bottom: 20px
  left: 50px
  position: absolute

@media only screen and (max-width: 600px)
  .hello1
    height: 180px
  .title , .discription
    left: 20px
</style>
