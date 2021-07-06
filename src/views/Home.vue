<template>
  <div
    ref="store"
    class="home">
    <div class="top">
      <img src="/images/top.png" />
    </div>
    <img
      class="logo"
      src="/images/logo.png" />
    <div class="datetime">{{ time }}</div>
    <div class="abs temp1">
      <def-bar />
    </div>
    <div class="abs temp2">
      <def-demo1 />
    </div>
    <div class="abs temp3">
      <def-map />
    </div>
    <div class="abs temp4">
      <div class="info">
        <def-item
          v-for="one in list"
          :key="one.color"
          :data="one" />
      </div>
    </div>
    <div class="disHeap" />
    <div class="temp5">
      <def-bottom />
    </div>
  </div>
</template>

<script>
import DefMap from 'comps/Map';
import DefBar from 'comps/Bar';
import DefDemo1 from 'comps/Demo1';
import DefItem from 'comps/Item';
import DefBottom from 'comps/Bottom';
import { displayApp } from '@/utils/index.js';

export default {
  name: 'Home',
  components: {
    DefMap,
    DefBar,
    DefDemo1,
    DefItem,
    DefBottom,
  },
  data() {
    return {
      time: (new Date()).toLocaleString(),
      timeInter: null,
      list: [
        {
          value: 10.01,
          color: '#0cd3db',
          time: '12:10',
          desc: '<p>杭州姚生记食品有限公司提供报盘</p><p>姚生记椒盐味特好剥山核桃160g</p><p>门店零售19.5</p><p>到期时间59天</p>',
        },
        {
          value: 20.02,
          color: '#2fff5b',
          time: '12:25',
          desc: '<p>杭州丰一贸易有限公司提供报盘</p><p>金磨坊大面筋烧烤鸡肉味辣条100g</p><p>门店零售1.5</p><p>到期时间45天</p>',
        },
        {
          value: 30.03,
          color: '#fd1010',
          time: '12:34',
          desc: '<p>杭州绿强食品有限公司提供报盘</p><p>爱尚咪咪休闲小点心虾味180g</p><p>门店零售3.5</p><p>到期时间74天</p>',
        },
        {
          value: 40.04,
          color: '#fcfa48',
          time: '12:45',
          desc: '<p>test1</p><p>test2</p><p>test3</p><p>test4</p>',
        },
      ],
      move: 3,
      // animateUp: false,
      // screenScroll: null,
    };
  },
  mounted() {
    this.$refs.store.ondblclick = () => {
      displayApp.isFullScreen() ? displayApp.exitFullScreen() : displayApp.fullScreen();
    };
    this.timeInter = setInterval(() => {
      this.time = (new Date()).toLocaleString();
    }, 1000);
    this.screenScroll = setInterval(this.scrollAnimate, 4000);
  },
  destroyed() {
    this.timeInter && clearInterval(this.timeInter);
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  .disHeap { height: 670px; }
  .top {
    position: absolute;
    left: 0; right: 0; top: -35px;
    img {
      width: 100%;
      display: block;
    }
  }
  .logo {
    width: 150px;
    position: absolute;
    left: 60px; top: 50px;
  }
  .datetime {
    color: #fff;
    font-size: 18px;
    position: absolute;
    right: 60px; top: 50px;
  }
  .temp1 {
    width: 480px;
    height: 250px;
    top: 140px; left: 30px;
  }
  .temp2 {
    width: 480px;
    height: 250px;
    background: #131f41;
    top: 400px; left: 30px;
  }
  .temp3 {
    height: 510px;
    left: 480px; top: 130px;
  }
  .temp4 {
    width: 410px;
    height: 510px;
    overflow: hidden;
    right: 30px; top: 140px;
  }
  .temp5 {
    position: absolute;
    top: 670px; bottom: 20px; left: 30px; right: 20px;
  }
}
</style>
