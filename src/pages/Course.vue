<template>
  <transition appear name="fade">
  <div>
    <navBar></navBar>
    <div class="course">
      <div class="container">
        <div class="h2">冶器課程</div>
        <hr>
        <div class="subject_intro">
          <md-layout md-gutter v-for="s in on" class="course" :key="s.id">
            <md-layout md-column md-gutter class="text">
              <div class="subject">{{ s.Course }}</div>
              <div class="notes">{{ s.Notes }}</div>
              <hr>
              <div class="dis">{{ s.Discription }}</div>
              <div class="notes"  v-html="s.Detail">{{ s.Detail }}</div>
              <div class="link">
                <router-link :to="s.Route" class="btn">課程介紹</router-link>
                <a class="btn" href="https://www.facebook.com/atobject/?fref=ts">粉專報名</a>
              </div>
            </md-layout>
            <md-layout
                md-flex-xsmall="100"
                class="subject_bg"
                :style="{ 'background-image': 'url(' + s.Img[0].thumbnails.large.url + ')' }"
                >
            </md-layout>
          </md-layout>
        </div>
        <hr>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import { map, set } from 'lodash';
import Airtable from 'airtable';
import NavBar from '@/components/NavBar';

const base = new Airtable({ apiKey: 'keyNCBsmapwe9NAJ7' }).base('appQUK6jNfTjos38j');

export default {
  name: 'course',
  components: {
    NavBar,
  },
  data() {
    return {
      course: [],
      active: {},
      backgroundImage: 'static/images/hero/hero.jpg',
    };
  },
  created() {
    this.syncAirtable();
  },

  computed: {
    on() {
      return this.course.filter(spnsor => spnsor.Class[0] === 'on');
    },
    classC() {
      return this.sponsors.filter(spnsor => spnsor.Class[0] === 'class_C');
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
      base('課程').select({
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
        this.course = item;
        // console.log('||||| Retrieved: ', this.sponsors);
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
.course
  max-width: 980px
  margin: 80px auto
  hr
    display: block
    height: 1px
    border: 0
    border-top: 1px solid #D8D8D8
    margin: 1em 0
    padding: 0
.subject_intro
  margin: 20px 0
.subject_bg
  @extend ._bcg-cover
  height: 480px
.subject
  font-size: 1.5em
.notes
  font-size: 12px
  color: #919191
  text-align: left
.dis
  font-size: 13px
  text-align: left
  margin: 20px 0
.text
  min-height: 240px
  text-align: left
  padding-right: 20px
  padding-top: 20px
.container
  margin: 0 24px
.btn
  color: #919191
  border: 1px solid #919191
  padding: 4px 16px
  margin-right: 12px
  &:hover
    text-decoration: none
.link
  margin-top: 24px
a:not(.md-button):not(.md-bottom-bar-item):hover
  text-decoration: none !important
</style>
