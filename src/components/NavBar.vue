<template>
  <div class="hello">
  <div class="logo">
    <img src='../assets/logo.png'>
  </div>
  <nav>
  <a href="">冶器物件</a>
  <router-link to="course">冶器課程</router-link>
  <a href="">冶器課程</a>
  <a href="">冶器見學</a>
  <a href="">冶器見學</a>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
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
.test
  color: red
</style>
