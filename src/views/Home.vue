<template>
  <div ref="store" class="home">
    <div class="top">
      <img src="/images/top.png" />
    </div>
    <img class="logo" src="/images/logo.png" />
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
      <div class="info" :class="{ 'animate-up': animateUp }">
        <def-item v-for="(one, idx) in list" :key="idx" :data="one" />
      </div>
    </div>
    <div class="disHeap" />
    <div class="temp5">
      <def-bottom />
    </div>
  </div>
</template>

<script>
import xlsx from 'xlsx';
import axios from 'axios';
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
      time: new Date().toLocaleString(),
      timeInter: null,
      list: [],
      move: 3,
      animateUp: false,
      screenScroll: null,
    };
  },
  mounted() {
    this.ReadExcel();
    this.$refs.store.ondblclick = () => {
      displayApp.isFullScreen() ? displayApp.exitFullScreen() : displayApp.fullScreen();
    };
    this.timeInter = setInterval(() => {
      this.time = new Date().toLocaleString();
    }, 1000);
  },
  destroyed() {
    this.timeInter && clearInterval(this.timeInter);
  },
  methods: {
    ReadExcel() {
      axios.get('/test.xls', { responseType: 'blob' }).then((res) => {
        const fileReader = new FileReader();
        fileReader.onload = (ev) => {
          try {
            const data = ev.target.result;
            const XLSX = xlsx;
            const workbook = XLSX.read(data, { type: 'binary' });
            const wsname = workbook.SheetNames[1];
            const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); // 生成json表格内容，wb.Sheets[Sheet名]获取第一个Sheet的数据
            const excellist = []; // 清空接收数据
            // 编辑数据
            const colorList = ['#0cd3db', '#2fff5b', '#fd1010', '#fcfa48'];
            let index = 0;
            for (let i = 0; i < ws.length; i++) {
              ws[i].color = colorList[index];
              index++;
              if (index === 4) index = 0;
              ws[i].value = ws[i].val4;
              ws[i].desc = `<p>${ws[i].val1}</p><p>${ws[i].name}</p><p>供货价格${ws[i].value}</p><p>到期时间${ws[i].endTime}天</p>`;
              excellist.push(ws[i]);
            }
            this.list = excellist;
            this.screenScroll = setInterval(this.scrollAnimate, 8000);
          } catch {
            return console.warn('读取失败 1');
          }
        };
        fileReader.readAsBinaryString(res.data);
      });
    },
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        const item = this.list.shift();
        this.list.push(item);
        this.animateUp = false;
      }, 500);
    },
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
  .disHeap {
    height: 670px;
  }
  .top {
    position: absolute;
    left: 0;
    right: 0;
    top: -35px;
    img {
      width: 100%;
      display: block;
    }
  }
  .logo {
    width: 149px;
    position: absolute;
    left: 60px;
    top: 40px;
  }
  .datetime {
    color: #fff;
    font-size: 18px;
    position: absolute;
    right: 60px;
    top: 50px;
  }
  .temp1 {
    width: 480px;
    height: 250px;
    top: 120px;
    left: 30px;
  }
  .temp2 {
    width: 480px;
    height: 250px;
    background: #131f41;
    top: 390px;
    left: 30px;
  }
  .temp3 {
    height: 510px;
    left: 480px;
    top: 120px;
  }
  .temp4 {
    width: 410px;
    height: 510px;
    overflow: hidden;
    right: 20px;
    top: 120px;
  }
  .temp5 {
    position: absolute;
    top: 660px;
    bottom: 20px;
    left: 30px;
    right: 20px;
  }
}
</style>
