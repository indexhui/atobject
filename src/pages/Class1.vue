<template>
  <transition appear name="fade">
    <div>
      <navBar></navBar>
      <div class="course">
        <div class="container">
          <div class="subject_intro">
            <md-layout md-gutter>
              <md-layout md-column md-gutter class="text" v-for="s in class1">
                <div class="text">
                  <div class="subject">{{s.Course}}</div>
                  <div class="notes">{{s.Notes}}}</div>
                  <hr>
                  <div class="dis">{{s.Discription}}</div>
                  <div class="notes">
                    {{s.Detail}}
                  </div>
                </div>
              </md-layout>

              <md-layout
              md-flex-xsmall="100"
              class="subject_bg"
              :style="{ 'background-image': 'url(' + courseImg + ')' }"
              >
              </md-layout>
            </md-layout>
          </div>
          <div v-for="s in class1">
              <div v-if="s.ImgCourse[0]">
              d
                {{s.ImgCourse[0].filename}}
                <div
                  class="imgCourse"
                  :style="{ 'background-image': 'url(' + s.ImgCourse[0].thumbnails.large.url + ')' }"
                >
                </div>
              </div>
              <div v-if="s.ImgCourse[1]">
                {{s.ImgCourse[1].filename}}
                 <div
                  class="imgCourse"
                  :style="{ 'background-image': 'url(' + s.ImgCourse[1].thumbnails.large.url + ')' }"
                >
                </div>
              </div>
              <div v-if="s.ImgCourse[2]">
                {{s.ImgCourse[2].filename}}
                 <div
                  class="imgCourse"
                  :style="{ 'background-image': 'url(' + s.ImgCourse[2].thumbnails.large.url + ')' }"
                >
                </div>
              </div>
              <div v-if="s.ImgCourse[3]">
                {{s.ImgCourse[3].filename}}
                 <div
                  class="imgCourse"
                  :style="{ 'background-image': 'url(' + s.ImgCourse[3].thumbnails.large.url + ')' }"
                >
                </div>
              </div>
              <div v-if="s.ImgCourse[4]">
                {{s.ImgCourse[4].filename}}
                 <div
                  class="imgCourse"
                  :style="{ 'background-image': 'url(' + s.ImgCourse[4].thumbnails.large.url + ')' }"
                >
                </div>
              </div>
          </div>
          <div>學生作品</div>
          <div>報名一律私訊粉絲轉頁</div>
          <div>前往粉專報名</div>
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
import { map, set } from 'lodash';
import Airtable from 'airtable';
import NavBar from '@/components/NavBar';

let item = [];
const base = new Airtable({ apiKey: 'keyNCBsmapwe9NAJ7' }).base('appyDZKIS0YkuSMAh');

const syncAirtable = (cb) => {
  // console.log('||||| syncAirtable()...');
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
    // console.log('||||| Retrieved: ', this.sponsors);
    if (cb) {
      cb();
    }
  });
};

export default {
  name: 'class1',
  components: {
    NavBar,
  },
  data() {
    return {
      course: [],
      active: {},
      hero: 'static/images/home/hero.png',
      logo: 'static/images/logo.png',
      courseImg: 'static/images/home/level1.png',
    };
  },
  beforeRouteEnter(to, from, next) {
    syncAirtable(next);
    // next();
  },
  head: {
    meta() {
      console.log('meta');
      return [
        { name: 'og:image', content: this.course[0].ImgCourse[0].thumbnails.large.url },
        { name: 'KeyWords', content: '英國投資, 海外房地產, 英國房地產' },
        { name: 'description', content: '冶器物件 金工教學' },
      ];
    },
  },
  created() {
    // this.syncAirtable();
    this.course = item;
    console.log(item);
  },
  computed: {
    on() {
      return this.course.filter(spnsor => spnsor.Class[0] === 'on');
    },
    class1() {
      return this.course.filter(spnsor => spnsor.Route === 'class1');
    },
  },
  methods: {
    setCourse() {
      this.course = item;
      console.log(item);
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

@media only screen and (max-width: 600px)
  .hero
    background-attachment: scroll
    height: 280px
.h2
  font-size: 1.5em
  line-height: 2em
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
.btn
  text-align: right
.container
  margin: 0 24px
.imgCourse
  @extend ._bcg-cover
  height: 300px
  width: 400px
@media only screen and (max-width: 600px)
  .subject_bg
    height: 300px
    margin-top: 12px
  .text
    padding-top: 0
</style>
