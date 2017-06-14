<template>
  <div class="wrapper">
    <div class="h2">冶氣見學</div>
  <section>
    <div class="container">
      <md-layout :md-gutte-smallr="16">
        <md-layout  md-flex-xsmall="100" class="bloger" v-for="s in events" :key="s.id">
              <a
                class="bg"
                :href="s.Link"
                target="_blank"
                v-bind:style="{ backgroundImage: 'url(' + s.Img[0].thumbnails.large.url + ')' }"
              >
              </a>
               <a :href="s.Link" target="_blank" class="article_title">
                {{ s.Article }}
              </a>
        </md-layout>
      </md-layout>
    </div>
  </section>
  </div>
</template>

<script>
import { map, set } from 'lodash';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'keyNCBsmapwe9NAJ7' }).base('appyDZKIS0YkuSMAh');

export default {
  data() {
    return {
      bloger: [],
      active: {},
    };
  },

  created() {
    this.syncAirtable();
  },

  computed: {
    events() {
      return this.bloger;
    },
  },

  methods: {
    handleOnClick({ Name }) {
      if (typeof this.active[Name] === 'undefined') {
        this.active[Name] = true;
      } else {
        this.active[Name] = !this.active[Name];
      }
      // console.log(this.active);
    },
    syncAirtable() {
      // console.log('||||| syncAirtable()...');
      let item = [];
      base('文章').select({
        // maxRecords: 100,
        view: 'Grid view',
      }).eachPage((records, fetchNextPage) => {
        // console.log(records);
        item = item.concat(map(records, record => set(record.fields, 'id', record.id)));
        fetchNextPage();
      }, (err) => {
        if (err) {
          // console.error(err);
          return;
        }
        this.bloger = item;
        // console.log('||||| Retrieved: ', this.events);
      });
    },
  },
};
</script>

<style lang="sass" scoped>
//Bg
._bcg-cover
  background-size: cover
  background-repeat: no-repeat
  background-position: center center
._bcg-contain
  background-size: contain
  background-repeat: no-repeat
  background-position: center center
.wrapper
  max-width: 1060px
  margin: 24px auto
  margin-top: 64px
// .container
.h2
  font-size: 1.5em
  // line-height: 2em
  margin-bottom: 24px
.bg
  @extend ._bcg-cover
  height: 180px
  width: 100%
  transition: all .3s ease-in-out
  cursor: pointer
  filter: blur(0px) grayscale(0)
  &:hover
    filter: blur(1px) grayscale(1)
.article_title
  color: #666666
  padding-top: 1em
  letter-spacing: 1px
.bloger
  margin: 0 5px
</style>

<style lang="sass" scoped>
@media only screen and (max-width: 600px)
  .bloger
    margin: 0
    margin-bottom: 20px
  .container
    margin: 0 24px
</style>
